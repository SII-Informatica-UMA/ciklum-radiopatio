package radiopatio.jpa.dtos;

import java.util.List;

import radiopatio.jpa.entidades.Ejercicio;

public class EjercicioDTO extends EjercicioNuevoDTO {
    private Long id;

    public void setId(final Long id) {
        this.id = id;
    }

    public EjercicioDTO() {
    }

    public static class EjercicioDTOBuilder {
        private Long id;
        private String nombre;
        private String tipo;
        private String descripcion;
        private String observaciones;
        private String musculosTrabajados;
        private String material;
        private String dificultad;
        private List<String> multimedia;

        EjercicioDTOBuilder() {
        }

        public EjercicioDTOBuilder id(final Long id) {
            this.id = id;
            return this;
        }

        public EjercicioDTOBuilder nombre(final String nombre) {
            this.nombre = nombre;
            return this;
        }

        public EjercicioDTOBuilder tipo(final String tipo) {
            this.tipo = tipo;
            return this;
        }

        public EjercicioDTOBuilder descripcion(final String descripcion) {
            this.descripcion = descripcion;
            return this;
        }
        public EjercicioDTOBuilder dificultad(final String dificultad) {
            this.dificultad = dificultad;
            return this;
        }
        public EjercicioDTOBuilder observaciones(final String observaciones) {
            this.observaciones = observaciones;
            return this;
        }

        public EjercicioDTOBuilder musculosTrabajados(final String musculosTrabajados) {
            this.musculosTrabajados = musculosTrabajados;
            return this;
        }
        public EjercicioDTOBuilder multimedia(final List<String> multimedia) {
            this.multimedia = multimedia;
            return this;
        }
        public EjercicioDTOBuilder material(final String material) {
            this.material = material;
            return this;
        }
        public EjercicioDTO build() {
            return new EjercicioDTO(this.id, this.nombre, this.tipo, this.descripcion, this.observaciones, this.musculosTrabajados, this.material, this.dificultad, this.multimedia);
        }

        public String toString() {
            return "EjercicioDTO.EjercicioDTOBuilder(id=" + this.id + ", nombre=" + this.nombre + ", tipo=" + this.tipo + ", descripcion=" + this.descripcion + ", observaciones=" + this.observaciones + ", musculosTrabajados=" + this.musculosTrabajados + ", material=" + this.material + ", dificultad=" + this.dificultad + ", multimedia=" + String.valueOf(this.multimedia) + ")";
        }



    }

    public Long getId() {
        return this.id;
    }
    public EjercicioDTO(Long id, String nombre, String tipo, String descripcion, String observaciones, String musculosTrabajados, String material, String dificultad, List<String> multimedia) {
        super(nombre, descripcion, observaciones, tipo, musculosTrabajados, material, dificultad, multimedia);
        this.id = id;
    }

    public static EjercicioDTOBuilder builder() {
        return new EjercicioDTOBuilder();
    }


    @Override 
    public Ejercicio toEntity() {
        return Ejercicio.builder().id(this.id).nombre(getNombre()).descripcion(getDescripcion()).observaciones(getObservaciones()).tipo(getTipo()).musculosTrabajados(getMusculosTrabajados()).material(getMaterial()).dificultad(getDificultad()).multimedia(getMultimedia()).build();
    }

    public static EjercicioDTO fromEntity(Ejercicio ejercicio) {
        return builder().id(ejercicio.getId()).nombre(ejercicio.getNombre()).descripcion(ejercicio.getDescripcion()).observaciones(ejercicio.getObservaciones()).tipo(ejercicio.getTipo()).musculosTrabajados(ejercicio.getMusculosTrabajados()).material(ejercicio.getMaterial()).dificultad(ejercicio.getDificultad()).multimedia(ejercicio.getMultimedia()).build();
    }


}
