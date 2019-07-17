function mostrar()
{

var sexo = prompt("ingrese f ó m .");

var femenino;
var masculino;
sexo= sexo.toLowerCase();
while ( sexo != "f" && sexo != "m"){
    
    sexo = prompt("es incorrecto");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN