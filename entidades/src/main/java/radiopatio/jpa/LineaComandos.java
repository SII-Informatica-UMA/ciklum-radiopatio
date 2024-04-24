package radiopatio.jpa;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import radiopatio.jpa.entidades.Ejercicio;
import radiopatio.jpa.entidades.Rutina;
import radiopatio.jpa.repositorios.EjercicioRepositorio;
import radiopatio.jpa.repositorios.RutinaRepositorio;


@Component
public class LineaComandos implements CommandLineRunner {
	private RutinaRepositorio repositoryRutina;
	private EjercicioRepositorio repositoryEjercicio;

	public LineaComandos() {
	}
	
	public LineaComandos(RutinaRepositorio repository) {
		this.repositoryRutina = repository;
	}

	public LineaComandos(EjercicioRepositorio repository) {
		this.repositoryEjercicio = repository;
	}

	@Override
	@Transactional
	public void run(String... args) throws Exception {

		for (String s: args) {
			System.out.println(s);
		}

		if (args.length > 0) {
			for(Rutina r: repositoryRutina.findByIdEntrenador(Long.valueOf(args[0]))) {
				System.out.println(r);
			}

			for(Ejercicio e: repositoryEjercicio.findByIdEntrenador(Long.valueOf(args[0]))) {
				System.out.println(e);
			}
		}
	}

}