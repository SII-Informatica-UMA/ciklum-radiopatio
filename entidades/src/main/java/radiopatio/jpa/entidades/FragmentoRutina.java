package radiopatio.jpa.entidades;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
@Entity
public class FragmentoRutina {
    @Id
    @GeneratedValue
    private Long id;
    private Integer series;
    private Integer repeticiones;
    private Integer duracionMinutos;
    @ManyToOne
    private Ejercicio ejercicio;

    public FragmentoRutina(Long id, Integer series, Integer repeticiones, Integer duracionMinutos, Ejercicio ejercicio){
        this.id = id;
        this.series = series;
        this.repeticiones = repeticiones;
        this.duracionMinutos = duracionMinutos;
        this.ejercicio = ejercicio;
    }

    public Long getId() {
        return this.id;
    }

    public Integer getSeries() {
        return this.series;
    }

    public Integer getRepeticiones() {
        return this.repeticiones;
    }

    public Integer getDuracionMinutos() {
        return this.duracionMinutos;
    }

    public Ejercicio getEjercicio() {
        return this.ejercicio;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSeries(Integer series) {
        this.series = series;
    }

    public void setRepeticiones(Integer repeticiones) {
        this.repeticiones = repeticiones;
    }

    public void setDuracionMinutos(Integer duracionMinutos) {
        this.duracionMinutos = duracionMinutos;
    }

    public void setEjercicio(Ejercicio ejercicio) {
        this.ejercicio = ejercicio;
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
		FragmentoRutina other = (FragmentoRutina) obj;
		return Objects.equals(id, other.id);
	}
	@Override
	public String toString() {
		return "FragmentoRutina [id=" + id + ", series=" + series + ", repeticiones=" + repeticiones + ", duracionMinutos=" + duracionMinutos + ", ejercicio=" + ejercicio.toString() +"]";
	}

    public static class FragmentoRutinaBuilder {
        private Long id;
        private Integer series;
        private Integer repeticiones;
        private Integer duracionMinutos;
        private Ejercicio ejercicio;

        FragmentoRutinaBuilder() {
        }

        public FragmentoRutinaBuilder id(final Long id) {
            this.id = id;
            return this;
        }

        public FragmentoRutinaBuilder series(final Integer series) {
            this.series = series;
            return this;
        }

        public FragmentoRutinaBuilder repeticiones(final Integer repeticiones) {
            this.repeticiones = repeticiones;
            return this;
        }

        public FragmentoRutinaBuilder duracionMinutos(final Integer duracionMinutos) {
            this.duracionMinutos = duracionMinutos;
            return this;
        }

        public FragmentoRutinaBuilder ejercicio(final Ejercicio ejercicio) {
            this.ejercicio = ejercicio;
            return this;
        }

        public FragmentoRutina build() {
            return new FragmentoRutina(this.id, this.series, this.repeticiones, this.duracionMinutos, this.ejercicio);
        }

        public String toString() {
            return "FragmentoRutina.FragmentoRutinaBuilder(id=" + this.id + ", series=" + this.series + ", repeticiones=" + this.repeticiones + ", duracionMinutos=" + this.duracionMinutos + ", ejercicio=" + String.valueOf(this.ejercicio) + ")";
        }
    }
    public FragmentoRutina() {
    }

    public static FragmentoRutinaBuilder builder() {
        return new FragmentoRutinaBuilder();
    }

}