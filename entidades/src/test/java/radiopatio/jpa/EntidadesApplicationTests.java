package radiopatio.jpa;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import radiopatio.jpa.entidades.Rutina;
import radiopatio.jpa.exceptions.EjercicioEnRutinaException;
import radiopatio.jpa.exceptions.RutinaNoEncontradaException;
import radiopatio.jpa.repositorios.EjercicioRepositorio;
import radiopatio.jpa.repositorios.RutinaRepositorio;
import radiopatio.jpa.servicios.EjercicioService;
import radiopatio.jpa.servicios.RutinaService;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class EntidadesAppiclationTests {

    @Mock
    private EjercicioRepositorio ejercicioRepositorio;

    @Mock
    private RutinaRepositorio rutinaRepositorio;

    @InjectMocks
    private EjercicioService ejercicioService;

    @InjectMocks
    private RutinaService rutinaService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("Debería eliminar el ejercicio si no está en una rutina")
    void deberiaEliminarEjercicioSiNoEstaEnUnaRutina() {
        Long idEjercicio = 1L;

        when(rutinaRepositorio.existsRutinaWithEjercicio(idEjercicio)).thenReturn(false);

        ejercicioService.eliminarEjercicio(idEjercicio);

        verify(ejercicioRepositorio, times(1)).deleteById(idEjercicio);
    }

    @Test
    @DisplayName("Debería lanzar EjercicioEnRutinaException si el ejercicio está en una rutina")
    void deberiaLanzarEjercicioEnRutinaExceptionSiEjercicioEstaEnRutina() {
        Long idEjercicio = 1L;

        when(rutinaRepositorio.existsRutinaWithEjercicio(idEjercicio)).thenReturn(true);

        assertThrows(EjercicioEnRutinaException.class, () -> ejercicioService.eliminarEjercicio(idEjercicio));
        verify(ejercicioRepositorio, never()).deleteById(idEjercicio);
    }

    @Test
    @DisplayName("Debería lanzar RutinaNoEncontradaException si la rutina no existe")
    void deberiaLanzarRutinaNoEncontradaExceptionSiRutinaNoExiste() {
        Rutina rutinaNoExistente = new Rutina();
        rutinaNoExistente.setId(1L);
        rutinaNoExistente.setNombre("Rutina no existente");

        when(rutinaRepositorio.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RutinaNoEncontradaException.class, () -> rutinaService.crearActualizarRutina(rutinaNoExistente));
    }

    @Test
    @DisplayName("Simula una rutina para y comprueba que es eliminada")
    public void EliminarRutinaExistente() {
        // Crea una rutina de prueba con un ID válido
        Long idRutina = 1L;
        Rutina rutina = new Rutina();
        rutina.setId(idRutina);

        // Simula que la rutina existe en el repositorio
        when(rutinaRepositorio.findById(idRutina)).thenReturn(Optional.of(rutina));

        // Llama al método eliminarRutina
        rutinaService.eliminarRutina(idRutina);

        // Verifica que se haya llamado al método deleteById con el ID correcto
        verify(rutinaRepositorio).deleteById(idRutina);
    }

    @Test
    @DisplayName("Devuelve una excepcion cuando no encuentra la rutina")
    public void EliminarRutinaNoEncontrada() {
        // Intenta eliminar una rutina inexistente (ID inválido)
        Long idRutinaInexistente = 999L;

        // Simula que la rutina no existe en el repositorio
        when(rutinaRepositorio.findById(idRutinaInexistente)).thenReturn(Optional.empty());

        // Verifica que se lance la excepción RutinaNoEncontradaException
        assertThrows(RutinaNoEncontradaException.class, () -> {
            rutinaService.eliminarRutina(idRutinaInexistente);
        });
    }

    @Test
    @DisplayName("Dado un id de entrenador, devuelve una lista con las rutinas que tiene asignadas")
    void ObtenerRutinas() {
        // La idea es que devuelva una lista con las rutinas, dependiendo del id del
        // entrenador
        Long idEntrenador = 123L;
        List<Rutina> rutinasDePrueba = List.of(new Rutina(), new Rutina());

        when(rutinaRepositorio.findByIdEntrenador(idEntrenador)).thenReturn(rutinasDePrueba);

        List<Rutina> rutinasObtenidas = rutinaService.obtenerRutinas(idEntrenador);
        assertEquals(rutinasDePrueba.size(), rutinasObtenidas.size());
    }


}
