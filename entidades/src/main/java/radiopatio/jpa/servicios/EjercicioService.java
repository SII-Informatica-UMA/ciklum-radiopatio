package radiopatio.jpa.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import radiopatio.jpa.entidades.Ejercicio;
import radiopatio.jpa.exceptions.EjercicioEnRutinaException;
import radiopatio.jpa.repositorios.EjercicioRepositorio;
import radiopatio.jpa.repositorios.RutinaRepositorio;
@Transactional
@Service
public class EjercicioService {
     private EjercicioRepositorio ejercicioRepo;
    private RutinaRepositorio rutinaRepo;

    public EjercicioService(EjercicioRepositorio ejercicioRepo, RutinaRepositorio rutinaRepo) {
        this.ejercicioRepo = ejercicioRepo;
        this.rutinaRepo = rutinaRepo;
    }

    public List<Ejercicio> obtenerEjercicios(Long idEntrenador) {
        comprobarPermiso(idEntrenador);
        return this.ejercicioRepo.findByIdEntrenador(idEntrenador);
    }

    public Optional<Ejercicio> obtenerEjercicio(Long idEjercicio) {
        Optional<Ejercicio> ejercicio = this.ejercicioRepo.findById(idEjercicio);
        ejercicio.ifPresent(this::comprobarPermiso);
        return ejercicio;
    }

    private void comprobarPermiso(Ejercicio ejercicio) {
    }

    private void comprobarPermiso(Long idEntrenador) {
    }

    public Ejercicio crearActualizarEjercicio(Ejercicio ejercicio) {
        comprobarPermiso(ejercicio);
        return (Ejercicio) this.ejercicioRepo.save(ejercicio);
    }

    public void eliminarEjercicio(Long id) {
        if (this.rutinaRepo.existsRutinaWithEjercicio(id)) {
            throw new EjercicioEnRutinaException();
        }
        this.ejercicioRepo.deleteById(id);
    }
}
