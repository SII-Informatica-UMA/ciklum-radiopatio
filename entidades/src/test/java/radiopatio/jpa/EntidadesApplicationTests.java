package radiopatio.jpa;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import radiopatio.jpa.exceptions.EjercicioEnRutinaException;
import radiopatio.jpa.repositorios.EjercicioRepositorio;
import radiopatio.jpa.repositorios.RutinaRepositorio;
import radiopatio.jpa.servicios.EjercicioService;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class EntidadesAppiclationTests {

    @Mock
    private EjercicioRepositorio ejercicioRepositorio;

    @Mock
    private RutinaRepositorio rutinaRepositorio;

    @InjectMocks
    private EjercicioService ejercicioService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("Debería eliminar el ejercicio si no está en una rutina")
    void deberiaEliminarEjercicioSiNoEstaEnUnaRutina() {
        // Arrange
        Long idEjercicio = 1L;

        when(rutinaRepositorio.existsRutinaWithEjercicio(idEjercicio)).thenReturn(false);

        // Act
        ejercicioService.eliminarEjercicio(idEjercicio);

        // Assert
        verify(ejercicioRepositorio, times(1)).deleteById(idEjercicio);
    }

    @Test
    @DisplayName("Debería lanzar EjercicioEnRutinaException si el ejercicio está en una rutina")
    void deberiaLanzarEjercicioEnRutinaExceptionSiEjercicioEstaEnRutina() {
        // Arrange
        Long idEjercicio = 1L;

        when(rutinaRepositorio.existsRutinaWithEjercicio(idEjercicio)).thenReturn(true);

        // Act & Assert
        assertThrows(EjercicioEnRutinaException.class, () -> ejercicioService.eliminarEjercicio(idEjercicio));
        verify(ejercicioRepositorio, never()).deleteById(idEjercicio);
    }
}
