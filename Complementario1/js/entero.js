var ente;
var impares = 0;
var par = 0;
var contpar = 0;
var contimpar = 0;
var sCifras = 0;
var bandera = false;
do{
var num = prompt("Digite Un Numero Entero: ");
if(!(num)){
    alert("Sin Espacios Vacios");
}else{
    if(isNaN(num) || (num % 1 != 0)){
        alert("Digite un dato valido.");
    }else{
      if(num >  0){
        ente = num.length ;
        document.write("<h3> El numero consta de: "+ente+" cifras </h3>");

        for(i = num; i > 0; i--){
            sCifras += i * 1;
            if(i % 2 == 0){
                par++;
                contpar += i * 1;
            }else{
                impares++;
                contimpar += i * 1;
            }
        }
          document.write("<h3> Cantidad de impares: "+impares+"</h3>");
          document.write("<h3> Cantidad de pares: "+par+"</h3>");
          document.write("<h3> La suma de las cifras impares: "+contimpar+"</h3>");
          document.write("<h3> La suma de las cifras pares: "+contpar+"</h3>");
          document.write("<h3> La suma de todas las cifras: "+sCifras+"</h3>");
        if(sPares > contimpar){
            document.write("<h3> La cifra mayor son los pares: "+contpar+"</h3>");
            document.write("<h3> La cifra Menor son los impares: "+contimpar+"</h3>");
            bandera = true;
        }else{
            document.write("<h3> La cifra mayor son los Impares: "+contimpar+"</h3>");
            document.write("<h3> La cifra Menor son los pares: "+contpar+"</h3>");
            bandera = true;
        }
      }else if(num < 0){
        ente = num.length - 1;
        document.write("<h3> Cantidad de cifras que tiene el numero "+ente+"</h3>");
        for(i = num; i < 0; i++){
            sCifras += i * 1;
            if(i % 2 == 0){
                par++;
                contpar += i * 1;
            }else{
                impares++;
                contimpar += i * 1;
            }
        }
          document.write("<h3> Cantidad de cifras impares: "+impares+"</h3>");
          document.write("<h3> Cantidad de cifras pares: "+par+"</h3>");
          document.write("<h3> La suma de cifras impares: "+contimpar+"</h3>");
          document.write("<h3> La suma de cifras pares: "+contpar+"</h3>");
          document.write("<h3> La suma de todas las cifras: "+sCifras+"</h3>");
        if(sPares > contimpar){
            document.write("<h3> La cifra mayor son los pares: "+contpar+"</h3>");
            document.write("<h3> La cifra Menor son los impares: "+contimpar+"</h3>");
            bandera = true;
        }else{
            document.write("<h3> La cifra mayor son los Impares: "+contimpar+"</h3>");
            document.write("<h3> La cifra Menor son los pares: "+contpar+"</h3>");
            bandera = true;
        }
      }else{

        document.write("<h3> Cantidad de cifras que tiene el numero 0</h3>");

        document.write("<h3> Cantidad de cifras impares: 0</h3>");

        document.write("<h3> Cantidad de cifras pares: 0</h3>");

        document.write("<h3> La suma de cifras impares: 0</h3>");

        document.write("<h3> La suma de cifras pares: 0</h3>");

        document.write("<h3> La suma de todas las cifras: 0</h3>");

        document.write("<h3> No hay cifra mayor ni menor</h3>");

        bandera = true;
      }
    }
}
}while(bandera == false);

