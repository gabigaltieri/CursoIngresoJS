function mostrar()
{

	
	// declarar variables
	
	var respuesta='si';
	var numero;
	var nroMaximo=0;
	var nroMinimo=10**99;
	var contador;

    while(respuesta=='si')
	
	{  numero=prompt("Ingrese los numeros");
		numero=parseInt(numero);
		
		while (isNaN(numero))
		{
			numero=prompt("ERROR, vuelva a ingresar los numeros");
			numero=parseInt (numero);
	
		}
	   
	 
	 if(numero>nroMaximo)
				{
					nroMaximo=numero;
				}	

			if(numero<nroMinimo)

				{
					nroMinimo=numero;
				}

		respuesta=respuesta.toLocaleLowerCase();
		respuesta=prompt("¿desea seguir?");
				}

	document.getElementById("maximo").value= nroMaximo;
	document.getElementById("minimo").value= nroMinimo;




}//FIN DE LA FUNCIÓN