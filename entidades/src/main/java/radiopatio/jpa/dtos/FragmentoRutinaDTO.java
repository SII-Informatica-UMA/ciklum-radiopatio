package radiopatio.jpa.dtos;

import java.util.List;

import radiopatio.jpa.entidades.FragmentoRutina;

public class FragmentoRutinaDTO {
    private Integer series;
    private Integer repeticiones;
    private Integer duracionMinutos;
    private EjercicioDTO ejercicio;

    public void setSeries(final Integer series) {
        this.series = series;
    }

    public void setRepeticiones(final Integer repeticiones) {
        this.repeticiones = repeticiones;
    }

    public void setDuracionMinutos(final Integer duracionMinutos) {
        this.duracionMinutos = duracionMinutos;
    }

    public void setEjercicio(final EjercicioDTO ejercicio) {
        this.ejercicio = ejercicio;
    }

    public FragmentoRutinaDTO() {
    }

   
    public static class FragmentoRutinaDTOBuilder {
        private Integer series;
        private Integer repeticiones;
        private Integer duracionMinutos;
        private EjercicioDTO ejercicio;

        FragmentoRutinaDTOBuilder() {
        }

        public FragmentoRutinaDTOBuilder series(final Integer series) {
            this.series = series;
            return this;
        }

        public FragmentoRutinaDTOBuilder repeticiones(final Integer repeticiones) {
            this.repeticiones = repeticiones;
            return this;
        }

        public FragmentoRutinaDTOBuilder duracionMinutos(final Integer duracionMinutos) {
            this.duracionMinutos = duracionMinutos;
            return this;
        }

        public FragmentoRutinaDTOBuilder ejercicio(final EjercicioDTO ejercicio) {
            this.ejercicio = ejercicio;
            return this;
        }

        public FragmentoRutinaDTO build() {
            return new FragmentoRutinaDTO(this.series, this.repeticiones, this.duracionMinutos, this.ejercicio);
        }

        public String toString() {
            return "FragmentoRutinaDTO.FragmentoRutinaDTOBuilder(series=" + this.series + ", repeticiones=" + this.repeticiones + ", duracionMinutos=" + this.duracionMinutos + ", ejercicio=" + String.valueOf(this.ejercicio) + ")";
        }
    }

    public FragmentoRutinaDTO(final Integer series, final Integer repeticiones, final Integer duracionMinutos, final EjercicioDTO ejercicio) {
        this.series = series;
        this.repeticiones = repeticiones;
        this.duracionMinutos = duracionMinutos;
        this.ejercicio = ejercicio;
    }

    public static FragmentoRutinaDTOBuilder builder() {
        return new FragmentoRutinaDTOBuilder();
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

    public EjercicioDTO getEjercicio() {
        return this.ejercicio;
    }

    public FragmentoRutina toEntity() {
        return FragmentoRutina.builder().series(this.series).repeticiones(this.repeticiones).duracionMinutos(this.duracionMinutos).ejercicio(this.ejercicio.toEntity()).build();
    }

    public static FragmentoRutinaDTO fromEntity(FragmentoRutina fragmentoRutina) {
        return builder().series(fragmentoRutina.getSeries()).repeticiones(fragmentoRutina.getRepeticiones()).duracionMinutos(fragmentoRutina.getDuracionMinutos()).ejercicio(EjercicioDTO.fromEntity(fragmentoRutina.getEjercicio())).build();
    }

    public static List<FragmentoRutina> toEntityList(List<FragmentoRutinaDTO> lista) {
        if (lista == null) {
            return null;
        }
        return lista.stream().map((v0) -> {
            return v0.toEntity();
        }).toList();
    }

    public static List<FragmentoRutinaDTO> fromEntityList(List<FragmentoRutina> lista) {
        if (lista == null) {
            return null;
        }
        return lista.stream().map(FragmentoRutinaDTO::fromEntity).toList();
    }
}
