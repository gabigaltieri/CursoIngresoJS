function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while (respuesta == 'si')
	{
		numero= prompt ("ingrese numeros")
		numero = parseInt (numero);

		while (isNaN (numero))
		 {
			 numero = prompt ("error ingrese otro numero")
		      numero = parseInt (numero);
		  }
if (numero > 0)
{
	positivo = numero + positivo 

}
else {
	negativo *= numero
}
	
respuesta = prompt ("desea ingresar otro numero");
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN