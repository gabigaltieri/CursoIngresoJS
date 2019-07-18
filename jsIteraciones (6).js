function mostrar()
{
	var numero;
	var contador=0;
	var promedio;
	var acumulador=0;

while (contador <5)

{
numero = prompt ("numeros de mierda")


numero = parseInt (numero);


contador++;


acumulador += numero;


promedio = acumulador/ contador;

}
while ( isNaN (numero)){
	numero = prompt ("es incorrecto por favor vuelva a ingresar la clave")

numero = parseInt (numero);
}




document.getElementById('suma').value=acumulador;

document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN