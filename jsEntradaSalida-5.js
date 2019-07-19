/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var edad;
    var nombre;
    nombre =document.getElementById('laEdad').value;
    
    edad=document.getElementById('elNombre').value;
    
    alert ("usted se llama: " +edad+ " y tiene: " +nombre);
    
}
