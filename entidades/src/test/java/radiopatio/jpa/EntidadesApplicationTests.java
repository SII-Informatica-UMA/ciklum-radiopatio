package radiopatio.jpa;

import java.net.URI;
import java.util.List;
import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.web.util.DefaultUriBuilderFactory;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriBuilderFactory;
import static org.assertj.core.api.Assertions.assertThat;

import radiopatio.jpa.dtos.EjercicioDTO;
import radiopatio.jpa.entidades.Ejercicio;
import radiopatio.jpa.repositorios.EjercicioRepositorio;
import radiopatio.jpa.repositorios.RutinaRepositorio;
import radiopatio.jpa.security.JwtUtil;
import radiopatio.jpa.servicios.EjercicioService;
import radiopatio.jpa.servicios.RutinaService;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,classes = EntidadesApplication.class)
@DisplayName("En el servicio de ejercicios y rutinas")
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@ExtendWith(MockitoExtension.class)
class EntidadesApplicationTests {
	
    @Autowired
    private TestRestTemplate restTemplate;
    

    @Value(value = "${local.server.port}")
    private int port;

    @Mock 
    private EjercicioRepositorio ejerRepo;
    @InjectMocks
    private EjercicioService ejercicioService;

    @Mock
    private RutinaRepositorio rutinaRepo;
    @InjectMocks 
    private RutinaService rutinaService;


    @Autowired
    private RutinaRepositorio rutinaRepositorio;
    @Autowired
    private EjercicioRepositorio ejercicioRepositorio;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

	
   
	
   
    @BeforeEach
	public void initializeDatabase() {
		rutinaRepositorio.deleteAll();
		ejercicioRepositorio.deleteAll();
		userDetails = jwtUtil.createUserDetails("1", "", List.of("ROLE_USER"));
		token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzE2NDczMTc3LCJleHAiOjE3MjAwNzMxNzd9.7tWskuEFkvIuPKHSyy9wTOczfK9LcwvV1sqhghyMAsImtNkL2KJZPpzG-e7SUF8ks-SI7rKkA7fBBU71MOCc4g";
	}


	@Autowired
	private JwtUtil jwtUtil;
	private UserDetails userDetails;
	private String token;
	
	private URI uri(String scheme, String host, int port, String... paths) {
        UriBuilderFactory ubf = new DefaultUriBuilderFactory();
        UriBuilder ub = ubf.builder()
            .scheme(scheme)
            .host(host).port(port);
        for (String path : paths) {
            ub = ub.path(path);
        }
        return ub.build();
    }

	private RequestEntity<Void> get(String scheme, String host, int port, String path) {
		URI uri = uri(scheme, host,port, path);
		var peticion = RequestEntity.get(uri)
				.accept(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + token)
				.build();
		return peticion;
	}
	private RequestEntity<Void> delete(String scheme, String host, int port, String path) {
        URI uri = uri(scheme, host, port, path);
        var peticion = RequestEntity.delete(uri)
            .header("Authorization", "Bearer " + token)
            .build();
        return peticion;
    }

	private <T> RequestEntity<T> post(String scheme, String host, int port, String path, T object) {
        URI uri = uri(scheme, host, port, path);
        var peticion = RequestEntity.post(uri)
            .contentType(MediaType.APPLICATION_JSON)
            .header("Authorization", "Bearer " + token)
            .body(object);
        return peticion;
    }

    private <T> RequestEntity<T> put(String scheme, String host, int port, String path, T object) {
        URI uri = uri(scheme, host, port, path);
        var peticion = RequestEntity.put(uri)
            .contentType(MediaType.APPLICATION_JSON)
            .header("Authorization", "Bearer " + token)
            .body(object);
        return peticion;
    }
    private void compruebaCampos(Ejercicio expected, Ejercicio actual) {
		assertThat(actual.getNombre()).isEqualTo(expected.getNombre());
		assertThat(actual.getDescripcion()).isEqualTo(expected.getDescripcion());

	}

	@Nested
	@DisplayName("cuando la base de datos esta vacia")
	public class BaseVacia{
		@Test
        @DisplayName("devuelve la lista de ejercicios vacía")
        public void devuelveEjerciciosVacios() {
            
            var peticion = get("http", "localhost", port, "/ejercicio?entrenador=1"); //?entrenador=1");

			var respuesta = restTemplate.exchange(peticion,
					new ParameterizedTypeReference<EjercicioDTO>() {});
			
			System.out.println("-------RESPUESTA----------" + respuesta);
			assertThat(respuesta.getStatusCode().value()).isEqualTo(404);
			
		}

        @Test
		@DisplayName("devuelve  error cuando se pide un ejercicio concreta")
		public void errorConEjercicioConcreto() {
			var peticion = get("http", "localhost", port, "/ejercicio/1");

			var respuesta = restTemplate.exchange(peticion,
					new ParameterizedTypeReference<EjercicioDTO>() {
					});

			assertThat(respuesta.getStatusCode().value()).isEqualTo(404); // comprueba el resultado - 404 no encontrado
		}

    //     @Nested
	// 	@DisplayName("intenta insertar un ejercicio")
	// 	public class InsertaGrupo {
	// 		@Test
	// 		@DisplayName("y se guarda con éxito")
	// 		public void sinID() {
	// 			var ejercicio = EjercicioDTO.builder().nombre("sentadilla").build();
	// 			var peticion = post("http", "localhost", port, "/ejercicio?entrenador=1", ejercicio);
				
	// 			var respuesta = restTemplate.exchange(peticion, Void.class);
				
	// 			compruebaRespuesta(ejercicio, respuesta);
	// 		}
    //         private void compruebaRespuesta(EjercicioDTO grupo, ResponseEntity<Void> respuesta) {
    //             assertThat(respuesta.getStatusCode().value()).isEqualTo(HttpStatus.CREATED.value());
    //    assertThat(respuesta.getHeaders().getLocation())
    //        .asString().startsWith("http://localhost:" + port + "/ejercicio?entrenador=1");
    //        }

			
	// 	}
       
    @Test
		@DisplayName("Devuelve error cuando se modifica un ejercicio concreto")
		public void modificarEjercicioInexistente() {
			var ejercicio = EjercicioDTO.builder().nombre("Sentadilla").build();
			var peticion = put("http", "localhost", port, "/ejercicio/1", ejercicio);

			var respuesta = restTemplate.exchange(peticion, Void.class);

			assertThat(respuesta.getStatusCode().value()).isEqualTo(404);
		}



    }
	

}



