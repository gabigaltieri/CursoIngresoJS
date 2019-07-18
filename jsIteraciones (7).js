function mostrar()
{	var numero;
	var promedio;
	var contador=0;
	var acumulador=0;
	var respuesta='si';



while (respuesta == 'si')

{
	numero = prompt ("ingrese un numero")
	
numero = parseInt (numero);

contador++;

acumulador += numero;

promedio = acumulador/ contador;



while (isNaN (numero))
{
	numero= prompt ("es incorrecto por favor ingrese un numero")

	numero= parseInt (numero);
}

respuesta= prompt ("desea seguir?")}

document.getElementById('suma').value=acumulador;

document.getElementById('promedio').value=acumulador/contador;



}//FIN DE LA FUNCIÓN