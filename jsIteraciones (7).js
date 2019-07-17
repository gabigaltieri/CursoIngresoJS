function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
while (respuesta != "si")

{
numero = prompt ("numeros de mierda")


numero = parseInt (numero);


contador++;


acumulador += numero;


promedio = acumulador/ contador;

respuesta= prompt ("desea seguir?");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN