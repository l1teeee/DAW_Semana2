
const ciudad = ["<br>Hong Kong", "<br>San Salvador", "Ciudad de Mexico"];
const ciudadtrue = ["Hong Kong", "<br>San Salvador   ", "<br>Ciudad de Mexico"];

ciudad.reverse();


document.getElementById("ciudades").innerHTML = ciudad;
document.getElementById("ciudades1").innerHTML = ciudadtrue;