function mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo= sexo.toLocaleLowerCase();
while (sexo=="f" && sexo == "m");
{
sexo= prompt ("Error vuelva a ingresar la letra")


}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN