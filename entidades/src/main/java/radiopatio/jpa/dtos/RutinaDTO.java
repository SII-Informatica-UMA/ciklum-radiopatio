package radiopatio.jpa.dtos;

import java.util.List;

import radiopatio.jpa.entidades.Rutina;

public class RutinaDTO extends RutinaNuevaDTO {
    private Long id;

    public void setId(final Long id) {
        this.id = id;
    }

    public RutinaDTO() {
    }

    public Long getId() {
        return this.id;
    }

    
    public static class RutinaDTOBuilder {
        private Long id;
        private String nombre;
        private String descripcion;
        private String observaciones;
        private List<FragmentoRutinaDTO> ejercicios;

        RutinaDTOBuilder() {
        }

        public RutinaDTOBuilder id(final Long id) {
            this.id = id;
            return this;
        }

        public RutinaDTOBuilder nombre(final String nombre) {
            this.nombre = nombre;
            return this;
        }

        public RutinaDTOBuilder descripcion(final String descripcion) {
            this.descripcion = descripcion;
            return this;
        }

        public RutinaDTOBuilder observaciones(final String observaciones) {
            this.observaciones = observaciones;
            return this;
        }

        public RutinaDTOBuilder ejercicios(final List<FragmentoRutinaDTO> ejercicios) {
            this.ejercicios = ejercicios;
            return this;
        }

        public RutinaDTO build() {
            return new RutinaDTO(this.id, this.nombre, this.descripcion, this.observaciones, this.ejercicios);
        }

        public String toString() {
            return "RutinaDTO.RutinaDTOBuilder(id=" + this.id + ", nombre=" + this.nombre + ", descripcion=" + this.descripcion + ", observaciones=" + this.observaciones + ", ejercicios=" + String.valueOf(this.ejercicios) + ")";
        }
    }

    public static RutinaDTOBuilder builder() {
        return new RutinaDTOBuilder();
    }

    public RutinaDTO(Long id, String nombre, String descripcion, String observaciones, List<FragmentoRutinaDTO> ejercicios) {
        super(nombre, descripcion, observaciones, ejercicios);
        this.id = id;
    }

    @Override 
    public Rutina toEntity() {
        return Rutina.builder().id(this.id).nombre(getNombre()).descripcion(getDescripcion()).observaciones(getObservaciones()).ejercicios(FragmentoRutinaDTO.toEntityList(getEjercicios())).build();
    }

    public static RutinaDTO fromEntity(Rutina rutina) {
        return builder().id(rutina.getId()).nombre(rutina.getNombre()).descripcion(rutina.getDescripcion()).observaciones(rutina.getObservaciones()).ejercicios(FragmentoRutinaDTO.fromEntityList(rutina.getEjercicios())).build();
    }
}
