function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero; 
	var maximo =0;
	var minimo =10**99;

	while(respuesta!='no')
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
	
	while (isNaN (numero))
	{
		numero= prompt ("es incorrecto, por favor ingrese un numero");
		numero= parseInt(numero);
}

	if (numero> maximo)
{
	maximo= numero
}
 if (numero< minimo)
 {
	 minimo= numero
 }
respuesta = prompt ("desea seguir?");

document.getElementById ('maximo').value=maximo
document.getElementById ('minimo').value= minimo
}



}//FIN DE LA FUNCIÓN