//creamos arreglos para el Articulo y para el precio del articulo
var Articulo= new Array(150);
var PrecioArt= new Array(150);
//banderas
var Band1 = false;
var Band2 = false;
var Band3 = false;
var Band4 = false;
//contadores
var i = 0;
var cantidadProducto = 1;
//creamos una variable para el switch
var j;

for(i = 0; i <= 100; i++){
do
{
    do{

    
if(!(Articulo[i] =  prompt("Digite el nombre del Articulo"))){
  alert("No deje espacios vacios");
}else{
    if(isNaN(Articulo[i])){
        Band4 = true;
        do{
            if(!(PrecioArt[i] = prompt("Por favor ingrese el precio del Articulo"))){
                alert("No deje espacios vacios");
            }else{
            if(isNaN(PrecioArt[i])){
               alert("Dato ingreso no valido");
            }else{
                Band2 = true;
              
            }
            }
        }while(Band2 == false);
    }else{
        alert("Dato ingreso no valido");

    }
   
}
    }while(Band4 == false);

do{
    j = prompt("1) Si desea ingresa otro Articulo 2) Si ya no ingresara productos");
    switch(j){
        case '1':
            Band3 = true;
            Band1 = true;
            cantidadProducto ++;
            break;
        case '2':
            i = 100;
            Band3 = true;
            Band1 = true;
            break;
        default:
            alert("ERROR... dato no valido");
            Band3 = false;
            break;
    }
}while(Band3 == false);



}while(Band1 == false);
}
document.write("<table> <tr> <th>Nombre del Articulo</th> <th>Precio</th>  </tr>");
for(i = 0; i <cantidadProducto; i++){
    document.write("<tr>  <td>"+ Articulo[i] +"</td>   <td>"+ "$"+PrecioArt[i]+"</td></tr>");
}
document.write("</table>");

