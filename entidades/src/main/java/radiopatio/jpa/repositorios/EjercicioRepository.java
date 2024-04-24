package radiopatio.jpa.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import radiopatio.jpa.entidades.Ejercicio;

public interface EjercicioRepository extends JpaRepository<Ejercicio,Long> {
    List<Ejercicio> findByNombre(String nombre); //por nombre
    List<Ejercicio> findByTipoAndDificultad(String tipo, String dificultad); //por tipo y dificultad

    //por tipo, difiultad y material
    @Query("SELECT e FROM Ejercicio e WHERE e.tipo = :tipo AND e.dificultad = :dificultad AND e.material = :material")
    List<Ejercicio> ConsultaTipoDificultadYMaterial(@Param("tipo") String tipo, @Param("dificultad") String dificultad, @Param("material") String material);
    //difiultad mayor o igual a una dada
    @Query("SELECT e FROM Ejercicio e WHERE e.dificultad >= :dificultad")
    List<Ejercicio> ConsultaDificultadMayorOIgual(@Param("dificultad") String dificultad);
    //difiultad menor o igual a una dada
    @Query("SELECT e FROM Ejercicio e WHERE e.dificultad <= :dificultad")
    List<Ejercicio> ConsultaDificultadMenorOIgual(@Param("dificultad") String dificultad);
    
    //para musculos trabajados
    @Query("SELECT e FROM Ejercicio e WHERE e.musculosTrabajados LIKE %:musculo%")
    List<Ejercicio> ConsultaMusculosTrabajados(@Param("musculo") String musculo);

}
