package radiopatio.jpa;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.URI;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.web.util.DefaultUriBuilderFactory;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriBuilderFactory;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import radiopatio.jpa.dtos.EjercicioDTO;
import radiopatio.jpa.dtos.RutinaDTO;
import radiopatio.jpa.entidades.Ejercicio;
import radiopatio.jpa.entidades.Rutina;
import radiopatio.jpa.repositorios.EjercicioRepositorio;
import radiopatio.jpa.repositorios.RutinaRepositorio;
import radiopatio.jpa.security.JwtUtil;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@DisplayName("En el servicio de ejercicios y rutinas")
@DirtiesContext(classMode = ClassMode.AFTER_EACH_TEST_METHOD)
class Practica3ApplicationTests {

	@Autowired
	private TestRestTemplate restTemplate;

	@Value(value="${local.server.port}")
	private int port;

	@Autowired
	private EjercicioRepositorio ejercicioRepo;

	@Autowired
	private RutinaRepositorio rutinaRepo;

    @BeforeEach
	public void initializeDatabase() {
		rutinaRepo.deleteAll();
		ejercicioRepo.deleteAll();
		userDetails = jwtUtil.createUserDetails("1", "", List.of("ROLE_USER"));
        token = jwtUtil.generateToken(userDetails);
	}

    @Autowired
	private JwtUtil jwtUtil;
	private UserDetails userDetails;
	private String token;

	private URI uri(String scheme, String host, int port, String ...paths) {
		UriBuilderFactory ubf = new DefaultUriBuilderFactory();
		UriBuilder ub = ubf.builder()
				.scheme(scheme)
				.host(host).port(port);
		for (String path: paths) {
			ub = ub.path(path);
		}
		return ub.build();
	}

	private RequestEntity<Void> get(String scheme, String host, int port, String path) {
		URI uri = uri(scheme, host, port, path);
        var peticion = RequestEntity.get(uri)
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
        var peticion = RequestEntity.post(uri).
                contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + token)
                .body(object);
        return peticion;
	}

	private <T> RequestEntity<T> put(String scheme, String host, int port, String path, T object) {
        URI uri = uri(scheme, host, port, path);
        var peticion = RequestEntity.put(uri).
                contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + token)
                .body(object);
        return peticion;
    }
	

	private void compruebaCampos(Ejercicio expected, Ejercicio actual) {
		assertThat(actual.getNombre()).isEqualTo(expected.getNombre());
		assertThat(actual.getDescripcion()).isEqualTo(expected.getDescripcion());

	}

    //Parte 1: Token no valido
    //Parte 2: Token valido (Prioritario)
        // Parte 2.1 : Base de datos vacia
        // Parte 2.2 : Base de datos llena

    @Nested
	@DisplayName("cuando la base de datos esta vacia")
	public class BaseVacia{
		@Nested
        @DisplayName("al probar ejercicios")
        public class EjercicioVacio{
            @Test
            @DisplayName("devuelve la lista de ejercicios vacía")
            public void devuelveEjerciciosVacios() {
                
                var peticion = get("http", "localhost", port, "/ejercicio?entrenador=1");

                var respuesta = restTemplate.exchange(peticion,
                        new ParameterizedTypeReference<List<EjercicioDTO>>() {});
                
                assertThat(respuesta.getStatusCode().value()).isEqualTo(200);
                assertThat(respuesta.getBody()).isEmpty();
                
            }

            @Test
            @DisplayName("devuelve  error cuando se pide un ejercicio concreto")
            public void errorConEjercicioConcreto() {
                var peticion = get("http", "localhost", port, "/ejercicio/1");

                var respuesta = restTemplate.exchange(peticion,
                        new ParameterizedTypeReference<EjercicioDTO>() {
                        });

                assertThat(respuesta.getStatusCode().value()).isEqualTo(404); // comprueba el resultado - 404 no encontrado
            }

        
            @Test
            @DisplayName("Devuelve error cuando se modifica un ejercicio concreto")
            public void modificarEjercicioInexistente() {
                var ejercicio = EjercicioDTO.builder().nombre("Sentadilla").build();
                var peticion = put("http", "localhost", port, "/ejercicio/1", ejercicio);

                var respuesta = restTemplate.exchange(peticion, Void.class);

                assertThat(respuesta.getStatusCode().value()).isEqualTo(404);
            }

            @Test
            @DisplayName("Devuelve error cuando se borra un ejercicio concreto")
            public void borrarEjercicioInexistente() {
                var peticion = delete("http", "localhost", port, "/ejercicio/1");

                var respuesta = restTemplate.exchange(peticion, Void.class);

                assertThat(respuesta.getStatusCode().value()).isEqualTo(404);
            }
            /* 
            @Test
            @DisplayName("Crea un ejercicio concreto exitosamente")
            public void crearEjercicio() {
                var ejercicio = EjercicioDTO.builder().nombre("Sentadilla").build();
                var peticion = post("http", "localhost", port, "/ejercicio", ejercicio);

                var respuesta = restTemplate.exchange(peticion, Void.class);

                assertThat(respuesta.getStatusCode().value()).isEqualTo(200);
                assertThat(respuesta.hasBody());
            }
            */
            }
        @Nested
        @DisplayName("al probar rutinas")
        public class RutinaVacia{
            @Test
            @DisplayName("devuelve la lista de rutinas vacía")
            public void devuelveRutinasVacias() {
                
                var peticion = get("http", "localhost", port, "/rutina?entrenador=1");

                var respuesta = restTemplate.exchange(peticion,
                        new ParameterizedTypeReference<List<RutinaDTO>>() {});
                
                assertThat(respuesta.getStatusCode().value()).isEqualTo(200);
                assertThat(respuesta.getBody()).isEmpty();
                
            }
            @Test
            @DisplayName("devuelve  error cuando se pide una rutina concreta")
            public void errorConRutinaConcreta() {
                var peticion = get("http", "localhost", port, "/rutina/1");

                var respuesta = restTemplate.exchange(peticion,
                        new ParameterizedTypeReference<EjercicioDTO>() {
                        });

                assertThat(respuesta.getStatusCode().value()).isEqualTo(404); // comprueba el resultado - 404 no encontrado
            }
            @Test
            @DisplayName("Devuelve error cuando se modifica una rutina concreta")
            public void modificarRutinaInexistente() {
                var rutina = RutinaDTO.builder().nombre("Lunes").build();
                var peticion = put("http", "localhost", port, "/rutina/1", rutina);

                var respuesta = restTemplate.exchange(peticion, Void.class);

                assertThat(respuesta.getStatusCode().value()).isEqualTo(404);
            }

            @Test
            @DisplayName("Devuelve error cuando se borra una rutina concreta")
            public void borrarRutinaInexistente() {
                var peticion = delete("http", "localhost", port, "/rutina/1");

                var respuesta = restTemplate.exchange(peticion, Void.class);

                assertThat(respuesta.getStatusCode().value()).isEqualTo(404);
            }
        }

    }

    @Nested
	@DisplayName("cuando la base de datos contiene datos")
	public class BaseConDatos{
        @BeforeEach
        public void llenarBase(){
            var ejercicio = new Ejercicio();
            ejercicio.setNombre("Sentadillas");
            var rutina = new Rutina();
            rutina.setNombre("Lunes");
            ejercicioRepo.save(ejercicio);
            rutinaRepo.save(rutina);
        }
        @Nested
        @DisplayName("al probar ejercicios")
        public class EjercicioConDato{
            @Test
            @DisplayName("devuelve lista de ejercicios")
            public void obtenerEjercicios(){
                var peticion = get("http", "localhost",port, "/ejercicio?entrenador=1");

			var respuesta = restTemplate.exchange(peticion,
					new ParameterizedTypeReference<List<EjercicioDTO>>() {});

			assertThat(respuesta.getStatusCode().value()).isEqualTo(200);
			assertThat(respuesta.getBody().size()).isEqualTo(1);
            }
        }
        

    }

	


	
}






