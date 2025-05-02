class celular{
	constructor(color, peso, rPantalla, rCamara, ram){
		this.color = color;
		this.peso = peso;
		this.rPantalla = rPantalla;
		this.rCamara = rCamara;
		this.ram = ram;
	}
	prender(){
		document.write("Fua, me encendi" + "<br>");
	}
	reiniciar(){
		document.write("Fua, me reinicie" + "<br>");
	}
	apagar(){
		document.write("Fua, me duermo" + "<br>");
	}
	tFotos(){
		document.write("Fua, que buena foto con mi camara de " + this.rCamara + "pixeles" + "<br>");
	}
	grabar(){
		document.write("Fua, que bien grabo con mi camara de " + this.rCamara + "pixeles" + "<br>");
	}
	especificaciones(){
		document.write("Mis especificaciones son:" + "<br>" + "Color: " + this.color + "<br>" + "Peso: " + this.peso + "<br>" + "Resolicion de pantalla: " + this.rPantalla + "<br>"+ "Resolicion de camara: " + this.rCamara + "<br>" + "RAM: " + this.ram + "<br>");
	}
}

Telefono1= new celular("azul", "200 gramos", "1080 pixeles", "1 k", "3 gigas");
Telefono2= new celular("negro", "250 gramos", "720 pixeles", "2 k", "4 gigas");
Telefono3= new celular("rojo", "180 gramos", "1080 pixeles", "720", "2 gigas");

listaTelefonos = [Telefono1, Telefono2, Telefono3];

for (let i = 0; i<3; i++){
	listaTelefonos[i].apagar();
	listaTelefonos[i].prender();
	listaTelefonos[i].reiniciar();
	listaTelefonos[i].tFotos();
	listaTelefonos[i].grabar();
	listaTelefonos[i].especificaciones();
	document.write("<br>");
}