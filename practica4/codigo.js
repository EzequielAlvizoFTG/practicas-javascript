class asignatura{
	constructor(materia, profe, nombreAlumnos){
		this.materia = materia;
		this.profe = profe;
		this.nombreAlumnos = nombreAlumnos;
		this.numeroAlumnos = nombreAlumnos.length;
	}
	mostrarAlumnos(){
		if (this.numeroAlumnos != 0){
			for (let i = 0; i < this.numeroAlumnos; i++){
				document.write(this.nombreAlumnos[i] + "<br>");
			}
		}
		
	}

	datosClase(){
		document.write("Esta es la asignatura: " + this.materia + "<br>" + "Impartida por el profesor: " + this.profe + "<br>" + "Y tenemos: " + this.numeroAlumnos + " alumnos" + "<br>");
	}

}

function materiasDeAlumno(alumno, matrizMaterias){
	let asignaturas = matrizMaterias.length;
	for (let i = 0; i < asignaturas; i++){
		if (matrizMaterias[i].nombreAlumnos.includes(alumno)){
			document.write("El alumno " + alumno + " pertenece a la asignatura de " + matrizMaterias[i].materia + "<br>");
		}
	}
}

matematicas = new asignatura("matematicas", "Mejenes", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "Cofla", "p", "q", "r", "s", "t"]);
programacion = new asignatura("programacion", "NareDios", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
fraudeFiscalI = new asignatura("fraude fiscal I", "David", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "Cofla", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
empanadasII = new asignatura("empanadas II", "Zury", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
espanol = new asignatura("espanol", "Teresa", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
historia = new asignatura("historia", "ZZZ", ["a", "b", "c", "d", "e", "f", "Cofla", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
ingles = new asignatura("ingles", "AchuayoDeidad", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
materiaDeRelleno = new asignatura("materia de relleno", "ZZZ", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
materiaDeRellenoII = new asignatura("materia de relleno II", "ZZZ", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "Cofla", "s", "t"]);
practicasProfesionales = new asignatura("practicas profesionales", "Manzano", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
ecuacionesDiferenciales = new asignatura("ecuaciones diferenciales", "Chale", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
calculoIntegral = new asignatura("calculo integral", "EvaDeidad", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "Cofla", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
calculoDiferencial = new asignatura("calculoDiferencial", "Rina", ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);

let listasMaterias = [matematicas, programacion, fraudeFiscalI, empanadasII, espanol,historia, ingles, materiaDeRelleno, materiaDeRellenoII, practicasProfesionales, ecuacionesDiferenciales, calculoIntegral, calculoDiferencial]

materiasDeAlumno("a", listasMaterias);