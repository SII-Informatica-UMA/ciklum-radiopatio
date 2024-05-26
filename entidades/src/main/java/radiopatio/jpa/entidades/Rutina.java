package radiopatio.jpa.entidades;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import java.util.Objects;
@Entity
public class Rutina {
    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private String descripcion;
    private String observaciones;
    @OneToMany(fetch = FetchType.EAGER, orphanRemoval = true, cascade = {CascadeType.ALL})
    private List<FragmentoRutina> ejercicios;
    private Long idEntrenador;

    public Rutina(Long id, String nombre, String descripcion, String observaciones, List<FragmentoRutina> ejercicios, Long idEntrenador){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.observaciones = observaciones;
        this.ejercicios = ejercicios;
        this.idEntrenador = idEntrenador;
    }


    public Long getId() {
        return this.id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public String getObservaciones() {
        return this.observaciones;
    }

    public List<FragmentoRutina> getEjercicios() {
        return this.ejercicios;
    }

    public Long getIdEntrenador() {
        return this.idEntrenador;
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public void setEjercicios(List<FragmentoRutina> ejercicios) {
        this.ejercicios = ejercicios;
    }

    public void setIdEntrenador(Long idEntrenador) {
        this.idEntrenador = idEntrenador;
    }

    @Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Rutina other = (Rutina) obj;
		return Objects.equals(id, other.id);
	}
	@Override
	public String toString() {
		return "Rutina [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", observaciones=" + observaciones + ", idEntrenador=" + idEntrenador +"]";
	}
    public static class RutinaBuilder {
        private Long id;
        private String nombre;
        private String descripcion;
        private String observaciones;
        private List<FragmentoRutina> ejercicios;
        private Long idEntrenador;

        RutinaBuilder() {
        }

        public RutinaBuilder id(final Long id) {
            this.id = id;
            return this;
        }

        public RutinaBuilder nombre(final String nombre) {
            this.nombre = nombre;
            return this;
        }

        public RutinaBuilder descripcion(final String descripcion) {
            this.descripcion = descripcion;
            return this;
        }

        public RutinaBuilder observaciones(final String observaciones) {
            this.observaciones = observaciones;
            return this;
        }

        public RutinaBuilder ejercicios(final List<FragmentoRutina> ejercicios) {
            this.ejercicios = ejercicios;
            return this;
        }

        public RutinaBuilder idEntrenador(final Long idEntrenador) {
            this.idEntrenador = idEntrenador;
            return this;
        }

        public Rutina build() {
            return new Rutina(this.id, this.nombre, this.descripcion, this.observaciones, this.ejercicios, this.idEntrenador);
        }

        public String toString() {
            return "Rutina.RutinaBuilder(id=" + this.id + ", nombre=" + this.nombre + ", descripcion=" + this.descripcion + ", observaciones=" + this.observaciones + ", ejercicios=" + String.valueOf(this.ejercicios) + ", idEntrenador=" + this.idEntrenador + ")";
        }
    }

    public Rutina() {
    }

    public static RutinaBuilder builder() {
        return new RutinaBuilder();
    }
    
}