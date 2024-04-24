package radiopatio.jpa.repositorios;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import radiopatio.jpa.entidades.Ejercicio;

@Repository
public interface EjercicioRepositorio extends JpaRepository<Ejercicio, Long> {
    List<Ejercicio> findByIdEntrenador(Long idEntrenador);
}
