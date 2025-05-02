class asignatura{
	constructor (materia, tTotales, tHechos, calificacion){
		this.materia = materia;
		this.tTotales = tTotales;
		this.tHechos = tHechos;
		this.calificacion = calificacion;
	}
	verificacion(){
		if ((this.calificacion >= 7) && ((this.tHechos/this.tTotales) >= 0.75)){
			console.log('%cAprobaste: ', 'color: green');
			console.log(this.materia);
		}
		else{
			console.log('%cReprobaste: ', 'color: red');
			console.log(this.materia);
		}
	}
}

quimica = new asignatura("quimica", 10, 7, 8);
fisica = new asignatura("fisica", 20, 17, 9);
matematica = new asignatura("matematica", 16, 14, 6);
lengua = new asignatura("lengua", 13, 9, 9);

quimica.verificacion();
fisica.verificacion();
matematica.verificacion();
lengua.verificacion();