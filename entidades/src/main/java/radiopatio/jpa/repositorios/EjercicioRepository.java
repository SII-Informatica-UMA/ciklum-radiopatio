package radiopatio.jpa.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import radiopatio.jpa.entidades.Ejercicio;

public interface EjercicioRepository extends JpaRepository<Ejercicio,Long> {
    List<Ejercicio> findByIdEntrenador(Long idEntrenador);

}
