function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var contadorpositivo=0;
	var contadornegativo=0;
	var promediopositivo=0;
	var promedionegativo=0;
	var sumapositivo=0;
	var sumanegativo=0;
	var contadorceros=0;
	var contadorpares=0;
	var diferencias=0;
	var modulo =0;
	while(respuesta!="no")
	{
		numero= prompt ("ingrese numeros");
		numero= parseInt (numero);
    while (isNaN(numero))
	{numero = prompt ("ERROR, vuelva a ingresar el numero");
	numero= parseInt (numero);
}
	
	if(numero<0)
	{
		sumapositivo+=numero;
		contadornegativo++
		promedionegativo= sumanegativo/ contadornegativo;
	}else {
		contadorceros++;
	
	}
modulo=numero%2;
if (modulo!=-1)
{
	contadorpares++;
}
diferencias=sumapositivo-sumanegativo;
respuesta= prompt("desea seguir ingresando?")

	}
	document.write("Suma positivos: "+sumapositivo+"<br>");
		document.write("Suma negativos: "+sumanegativo+"<br>");
		document.write("Cantidad positivos: "+contadorpositivo+"<br>");
		document.write("Cantidad negativos: "+contadornegativo+"<br>");
		document.write("Cantidad de Ceros: "+contadorceros+"<br>");
		document.write("Cantidad pares: "+contadorpares+"<br>");
		document.write("PromedioPositivos: "+promediopositivo+"<br>");
		document.write("Promedio Negativos: "+promedionegativo+"<br>");
		document.write("Diferencia entre positivo y negativo: "+diferencia+"<br>");

}//FIN DE LA FUNCIÓN