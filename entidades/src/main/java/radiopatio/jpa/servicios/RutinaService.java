package radiopatio.jpa.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import radiopatio.jpa.entidades.Rutina;
import radiopatio.jpa.exceptions.RutinaNoEncontradaException;
import radiopatio.jpa.repositorios.RutinaRepositorio;
@Transactional
@Service
public class RutinaService {
    private RutinaRepositorio rutinaRepo;

    public RutinaService(RutinaRepositorio rutinaRepo) {
        this.rutinaRepo = rutinaRepo;
    }

    public List<Rutina> obtenerRutinas(Long idEntrenador) {
        comprobarPermiso(idEntrenador);
        return this.rutinaRepo.findByIdEntrenador(idEntrenador);
    }

    private void comprobarPermiso(Long idEntrenador) {
    }

    private void comprobarPermiso(Rutina rutina) {
    }

    public Optional<Rutina> obtenerRutina(Long idRutina) {
        Optional<Rutina> rutina = this.rutinaRepo.findById(idRutina);
        rutina.ifPresent(this::comprobarPermiso);
        return rutina;
    }

    public void eliminarRutina(Long idRutina) {
        Optional<Rutina> rutina = obtenerRutina(idRutina);
        rutina.ifPresent(r -> {
            comprobarPermiso(r);
        });
        rutina.orElseThrow(RutinaNoEncontradaException::new);
        this.rutinaRepo.deleteById(idRutina);
    }

    public Rutina crearActualizarRutina(Rutina rutina) {
        comprobarPermiso(rutina);
        return (Rutina) this.rutinaRepo.save(rutina);
    }
}
