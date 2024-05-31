package radiopatio.jpa.controladores;

import java.net.URI;
import java.util.List;
import java.util.function.Function;

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
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import radiopatio.jpa.dtos.RutinaDTO;
import radiopatio.jpa.dtos.RutinaNuevaDTO;
import radiopatio.jpa.entidades.Rutina;
import radiopatio.jpa.exceptions.RutinaNoEncontradaException;
import radiopatio.jpa.servicios.RutinaService;

@RequestMapping({"/rutina"})
@RestController
@CrossOrigin
public class RutinaController {
    private RutinaService rutinaService;
    public RutinaController(RutinaService rutinaService) {
        this.rutinaService = rutinaService;
    }
    @GetMapping
    @Operation(description = "Para que el entrenador consulte las rutinas", responses = {@ApiResponse(responseCode = "200", description = "Listado de rutinas del entrenador"), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public List<RutinaDTO> obtenerRutinas(@RequestParam(value = "entrenador", required = true) Long idEntrenador) {
        return this.rutinaService.obtenerRutinas(idEntrenador).stream().map(RutinaDTO::fromEntity).toList();
    }
    @PostMapping
    @Operation(description = "Para que el entrenador cree una nueva rutina con ejercicios que existen", responses = {@ApiResponse(responseCode = "201", description = "Rutina Creada", headers = {@Header(name = "Location", description = "URI del nuevo recurso", schema = @Schema(type = "string", subTypes = {URI.class}))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public ResponseEntity<RutinaDTO> crearRutina(@RequestParam(value = "entrenador", required = true) Long idEntrenador, @RequestBody RutinaNuevaDTO rutinaNuevaDTO, UriComponentsBuilder uriBuilder) {
        Rutina rutina = rutinaNuevaDTO.toEntity();
        rutina.setIdEntrenador(idEntrenador);
        rutina.setId(null);
        Rutina rutina2 = this.rutinaService.crearActualizarRutina(rutina);
        return ResponseEntity.created(generadorUri(uriBuilder.build()).apply(rutina2)).body(RutinaDTO.fromEntity(rutina2));
    }
    @PutMapping({"/{idRutina}"})
    @Operation(description = "Para que entrenador creador actualice la rutina", responses = {@ApiResponse(responseCode = "200", description = "Rutina actualizada"), @ApiResponse(responseCode = "404", description = "La rutina no existe", content = {@Content(schema = @Schema(implementation = Void.class))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public RutinaDTO actualizarRutina(@PathVariable Long idRutina, @RequestBody RutinaDTO rutina) {
        Rutina original = this.rutinaService.obtenerRutina(idRutina).orElseThrow(() -> {
            return new RutinaNoEncontradaException();
        });
        Rutina g = rutina.toEntity();
        g.setId(idRutina);
        g.setIdEntrenador(original.getIdEntrenador());
        return RutinaDTO.fromEntity(this.rutinaService.crearActualizarRutina(g));
    }
    private Function<Rutina, URI> generadorUri(UriComponents uriBuilder) {
        return g -> {
            return UriComponentsBuilder.newInstance().uriComponents(uriBuilder).path("/rutina").path(String.format("/%d", g.getId())).build().toUri();
        };
    }
    @GetMapping({"/{idRutina}"})
    @Operation(description = "El entrenador creador o el cliente obtienen una rutina", responses = {@ApiResponse(responseCode = "200", description = "La rutina existe"), @ApiResponse(responseCode = "404", description = "La rutina no existe", content = {@Content(schema = @Schema(implementation = Void.class))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public ResponseEntity<RutinaDTO> getRutina(@PathVariable Long idRutina) {
        return ResponseEntity.of(this.rutinaService.obtenerRutina(idRutina).map(RutinaDTO::fromEntity));
    }
    @DeleteMapping({"/{idRutina}"})
    @Operation(description = "El entrenador creador elimina la rutina", responses = {@ApiResponse(responseCode = "200", description = "Rutina eliminada"), @ApiResponse(responseCode = "404", description = "La rutina no existe", content = {@Content(schema = @Schema(implementation = Void.class))}), @ApiResponse(responseCode = "403", description = "Acceso no autorizado", content = {@Content(schema = @Schema(implementation = Void.class))})})
    public void eliminarRutina(@PathVariable Long idRutina) {
        this.rutinaService.eliminarRutina(idRutina);
    }
    @ExceptionHandler({RutinaNoEncontradaException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public void rutinaNoEncontrada() {
    }

}
