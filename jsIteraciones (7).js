function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
	var promedio;


	do
    {
	 
	 	numero= prompt("ingrese los numeros"),
	
	 	numero= parseInt (numero);

	while(isNaN(numero))
	{
		numero=prompt("ingrese numero valido");
		
		numero=parseInt(numero);
	}

		
		contador++;
		acumulador+=numero
		promedio=acumulador/contador
		
		respuesta=prompt("¿desea volver a ingresar numeros? si/no");
		
		respuesta=respuesta.toLowerCase();
	
}while (respuesta=="si")

	document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;
	 
	/* 
var numero;
var respuesta="si";
var acumulador;
var contador=0;
var promedio;

	do{
        numero=prompt("ingrese los numeros");
		 numero=parseInt(numero);
		 respuesta= prompt("desea seguir?");
		 respuesta=respuesta.toLocaleLowerCase();
		 contador++;
		 acumulador+=numero;
		 promedio= acumulador/contador;
		 	while (isNaN(numero)) 
			 {
				 	numero=prompt("error, vuelva a ingresar numeros");
					 
			 }
			 
				}
				while(respuesta=="si"){

				}

				document.getElementById("suma").value=acumulaldor;
				document.getElementById("promedio").value=promedio;





*/


}//FIN DE LA FUNCIÓN