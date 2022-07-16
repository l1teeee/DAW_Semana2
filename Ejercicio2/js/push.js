

var ciudades = []
var ciuda = document.getElementById("ciuda");
var visitada = document.getElementById("visitada");
if (ciudades.length==0){
    ciuda.innerHTML = "No hay ciudades visitadas";
}

function agregar(){
    ciudades.push(visitada.value);
    ciuda.innerHTML = ciudades;
}

function eliminar(){
    ciudades.pop()
    ciuda.innerHTML = ciudades;
}