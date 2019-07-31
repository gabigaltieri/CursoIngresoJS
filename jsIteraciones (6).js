function mostrar()
{

	var contador=0;
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

/*
var contador = 0;
	var laSuma = 0;
	var numero;
	

	while(contador < 5){
		contador++;
		
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero= prompt("Error, ingrese un numero");
		}
		
		laSuma +=numero;
		}
		document.getElementById('suma').value = laSuma;
		document.getElementById('promedio').value = laSuma/5;
	*/

}//FIN DE LA FUNCIÓN