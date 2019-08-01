function mostrar()
{

/*	var contador=0;
	var laSuma=0;
	var numero;

	while (contador<5)
{

contador++;

numero= prompt("ingrese un numero");

numero= parseInt (numero);

while (isNaN(numero)) {
	numero= prompt("error, ingrese un numero");
}
laSuma +=numero;

}


document.getElementById('suma').value=laSuma;
document.getElementById('promedio').value=laSuma/5;
*/

var suma;
var contador;
var numero;

contador=0;
suma=0;

do{

	contador++;
	
	numero=prompt("ingrese los numeros");
	
	numero=parseInt(numero);
	
	suma += numero;
	
	while (isNaN(numero)){
		numero=prompt("error,vuelva a ingresar numeros");
			}

}

while (contador<5){

}


document.getElementById("suma").value=suma;

document.getElementById("promedio").value=suma/5;
}//FIN DE LA FUNCIÓN