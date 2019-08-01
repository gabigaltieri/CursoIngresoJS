function mostrar()
{
/*
var sexo;
sexo= prompt("ingrese f ó m .");




while (sexo == "f" || sexo == "m")
{
sexo= prompt ("Error vuelva a ingresar la letra");
sexo= sexo.toLocaleLowerCase();

}
document.getElementById('Sexo').value=sexo;
*/

var sexo;

sexo= prompt("por favor ingrese la letra correspondiente");

do{
    sexo=prompt("Error,vuelva a ingresar la letra");

}
while (sexo!='f'&& sexo!= 'm'){

}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN