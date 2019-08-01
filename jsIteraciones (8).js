function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
		while (respuesta=="si")
		{ 
			numero=prompt("ingrese los numeros");
			
			numero=parseInt(numero);

			while (isNaN(numero))
			{
				numero=prompt("vuelva a ingresar los numeros");
			   }
			  
			  
			   contador++;
			  
			   if (numero>=0){

				   positivo+=numero;
			   }
			   else {

				   negativo*=numero;
			   }
			
			
			
			respuesta=respuesta.toLocaleLowerCase();

			respuesta=prompt("¿desea seguir ingresando numeros? si/no")
		}		
		











document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN