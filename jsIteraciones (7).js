function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	 while (respuesta=="si"){
      
	  numero= prompt("Ingrese un numeros");
	  numero = parseInt(numero);

   while (isNaN(numero));
     {numero= prompt ("Error, vuelva a ingresar un numero")

	 numero= parseInt(numero);
	 }
	 contador++;
	 acumulador+=numero
	 
	
	var acumulada =document.getElementById('suma').value=acumulada;
var promedio =document.getElementById('promedio').value=promedio;


respuesta= prompt("¿desea seguir? si/no")
respuesta= respuesta.toLocaleLowerCase();
	 }

}//FIN DE LA FUNCIÓN