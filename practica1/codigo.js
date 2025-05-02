/*alitoHeladoDeAgua = 0.6;
palitoHeladoDeCrema = 1;
bombonHeladoHeladix = 1.6;
bombonHeladoHeladovitch = 1.7;
bombonHeladoHelardo = 1.8;
potecitoHeladoConfites = 2.9;
poteCuarto = 2.9; */

p1 = 0.6;
p2 = 1;
p3 = 1.6;
p4 = 1.7;
p5 = 1.8;
p6 = 2.9;
p7 = 2.9;

producto1 = "Palito de helado de agua";
producto2 ="Palito de helado de crema";
producto3 ="Bombón helado marca heladix";
producto4 ="Bombón helado marca heladovich";
producto5 ="Bombón helado marca helardo";
producto6 ="Potecito de helado con confites";
producto7 ="Pote de 1/4 KG";

console.log("Hola, bienvenido a la heladería de la familia Heladovich");
console.log("Los productos que tenemos son: ");

dinero=prompt("Cuanto dinero tienes?");

if (dinero >= p6) {
	cambio = dinero%p6;
	document.write("Te alcanza para los productos " + producto6 + " y " + producto7);
	document.write(" y te sobra " + cambio);
}
else if (dinero >= p5) {
	cambio = dinero%p5;
	document.write("Te alcanza para los producto " + producto5);
	document.write(" y te sobra " + cambio);
}
else if (dinero >= p4) {
	cambio = dinero%p4;
	document.write("Te alcanza para los producto " + producto4);
	document.write(" y te sobra " + cambio);
}
else if (dinero >= p3) {
	cambio = dinero%p3;
	document.write("Te alcanza para los producto " + producto3);
	document.write(" y te sobra " + cambio);
}
else if (dinero >= p2) {
	cambio = dinero%p2;
	document.write("Te alcanza para los producto " + producto2);
	document.write(" y te sobra " + cambio);
}
else if (dinero >= p1) {
	cambio = dinero%p1;
	document.write("Te alcanza para los producto " + producto1);
	document.write(" y te sobra " + cambio);
}
