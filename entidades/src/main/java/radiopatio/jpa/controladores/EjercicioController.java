package radiopatio.jpa.controladores;



import java.net.URI;
import java.util.List;
import java.util.function.Function;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.headers.Header;
import radiopatio.jpa.dtos.EjercicioDTO;
import radiopatio.jpa.dtos.EjercicioNuevoDTO;
import radiopatio.jpa.entidades.Ejercicio;
import radiopatio.jpa.exceptions.EjercicioEnRutinaException;
import radiopatio.jpa.exceptions.EjercicioNoEncontradoException;
import radiopatio.jpa.servicios.EjercicioService;

@RequestMapping({"/ejercicio"})
@RestController
@CrossOrigin
public class EjercicioController {
    private EjercicioService ejercicioService;
    public EjercicioController(EjercicioService ejercicioService) {
        this.ejercicioService = ejercicioService;
    }
    @GetMapping
    @Operation(description = "Para que el entrenador vea los ejercicios", responses = {@ApiResponse(responseCode = "200", description = "Listado ejercicios del entrenador"), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public List<EjercicioDTO> obtenerEjercicios(@RequestParam(value = "entrenador", required = true) Long idEntrenador) {
        return this.ejercicioService.obtenerEjercicios(idEntrenador).stream().map(EjercicioDTO::fromEntity).toList();
    }

    @PostMapping
    @Operation(description = "Para que el entrenador cree un ejercicio ", responses = {@ApiResponse(responseCode = "201", description = "Ejercicio creado", headers = {@Header(name = "Location", description = "URI del nuevo recurso", schema = @Schema(type = "string", subTypes = {URI.class}))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public ResponseEntity<EjercicioDTO> crearEjercicio(@RequestParam(value = "entrenador", required = true) Long idEntrenador, @RequestBody EjercicioNuevoDTO ejercicioNuevoDTO, UriComponentsBuilder uriBuilder) {
        Ejercicio g = ejercicioNuevoDTO.toEntity();
        g.setId(null);
        g.setIdEntrenador(idEntrenador);
        Ejercicio g2 = this.ejercicioService.crearActualizarEjercicio(g);
        return ResponseEntity.created(generadorUri(uriBuilder.build()).apply(g2)).body(EjercicioDTO.fromEntity(g2));
    }
    private Function<Ejercicio, URI> generadorUri(UriComponents uriBuilder) {
        return g -> {
            return UriComponentsBuilder.newInstance().uriComponents(uriBuilder).path("/ejercicio").path(String.format("/%d", g.getId())).build().toUri();
        };
    }
    @PutMapping({"/{idEjercicio}"})
    @Operation(description = "Entrenador actualiza ejercicio", responses = {@ApiResponse(responseCode = "200", description = "Ejercicio actualizado"), @ApiResponse(responseCode = "404", description = "El ejercicio no existe", content = {@Content(schema = @Schema(implementation = Void.class))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public EjercicioDTO actualizarEjercicio(@PathVariable Long idEjercicio, @RequestBody EjercicioDTO ejercicio) {
        Ejercicio original = this.ejercicioService.obtenerEjercicio(idEjercicio).orElseThrow(() -> {
            return new EjercicioNoEncontradoException();
        });
        Ejercicio g = ejercicio.toEntity();
        g.setId(idEjercicio);
        g.setIdEntrenador(original.getIdEntrenador());
        return EjercicioDTO.fromEntity(this.ejercicioService.crearActualizarEjercicio(g));
    }
    @GetMapping({"/{idEjercicio}"})
    @Operation(description = "Para que entrenador creador o cliente pueda obtener el ejercicio ", responses = {@ApiResponse(responseCode = "200", description = "El ejercicio existe"), @ApiResponse(responseCode = "404", description = "El ejercicio no existe", content = {@Content(schema = @Schema(implementation = Void.class))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public ResponseEntity<EjercicioDTO> getEjercicio(@PathVariable Long idEjercicio) {
        return ResponseEntity.of(this.ejercicioService.obtenerEjercicio(idEjercicio).map(EjercicioDTO::fromEntity));
    }
    @DeleteMapping({"/{idEjercicio}"})
    @Operation(description = "Entrenador creador borra ejercicio", responses = {@ApiResponse(responseCode = "200", description = "Ejercicio elminado"), @ApiResponse(responseCode = "404", description = "El ejercicio no existe", content = {@Content(schema = @Schema(implementation = Void.class))}), @ApiResponse(responseCode = "417", description = "El ejercicio aparece en una rutina y no se puede eliminar", content = {@Content(schema = @Schema(implementation = Void.class))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public ResponseEntity<Void> eliminarEjercicio(@PathVariable Long idEjercicio) {
        this.ejercicioService.obtenerEjercicio(idEjercicio).orElseThrow(EjercicioNoEncontradoException::new);
        try {
            this.ejercicioService.eliminarEjercicio(idEjercicio);
            return ResponseEntity.ok().build();
        } catch (EjercicioEnRutinaException e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build();
        }
    }
    @ExceptionHandler({EjercicioNoEncontradoException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public void ejercicioNoEncontrado() {
    }
}
