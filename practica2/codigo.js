let alumnos = parseInt(prompt("Cuantos alumnos son?"));
let listaAsistencias = [];

document.write("hola");

function lista(dia){
	document.write(dia + "<br>");
	let asistencia = prompt("LLego a clase?");
	if (asistencia == "p" || asistencia == "P") {
		return 1
	}
	else {
		return 0
	}
}

for (let i = 0; i < alumnos; i++){
	listaAsistencias.push([]);
}

for (let dia = 0; dia < 30; dia++){
	for (let alumno = 0; alumno < alumnos; alumno++){
		listaAsistencias[alumno].push(lista("dia " + (dia+1)))
	}
}

console.log(listaAsistencias)