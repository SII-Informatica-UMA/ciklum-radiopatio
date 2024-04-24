package radiopatio.jpa.repositorios;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import radiopatio.jpa.entidades.Rutina;

@Repository
public interface RutinaRepositorio extends JpaRepository<Rutina, Long> {
    List<Rutina> findByIdEntrenador(Long idEntrenador);
}
