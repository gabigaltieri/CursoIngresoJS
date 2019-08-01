function mostrar()
{

	/*var numero = prompt("ingrese un número entre 0 y 9.");


while (numero<0 || numero>9)
{
	numero=prompt ("Error vuelva a ingresar el numero del 0 al 9");
}

document.getElementById("Numero").value=numero;
*/


var numero;

numero = prompt ("por favor ingrese un numero del 0 al 9.");

do{

numero= prompt ("error, vuelva a ingresar un numero del 0 al 9.");
}
while(numero<0 || numero >9){

}
 document.getElementById("Numero").value=numero;
}//FIN DE LA FUNCIÓN