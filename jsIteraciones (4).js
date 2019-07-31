function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");


while (numero<0 || numero>10)
{
	numero=prompt ("Error vuelva a ingresar el numero del 0 al 10");
}

document.getElementById("Numero").value=numero;






}//FIN DE LA FUNCIÓN