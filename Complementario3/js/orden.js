
var num = new Array(100);
var cantNum = 0;
var contaNume = 1;
var i,j;
var opcion;
var auxiliar;
var Band = false;
var Band2 = false;
var Band3 = false;

do{
   if(!(cantNum = parseInt(prompt("Ingrese la cantidad de numeros a digitar")))){
    alert("No deje espacios vacios");
   }else{
    if(isNaN(cantNum) || (cantNum % 1 < 0) || (cantNum % 1 > 0)){
        alert("Dato erroneo");
    }else{
      for(i = 0; i < cantNum; i++){
        do{
            if(!(num[i] = parseFloat(prompt("Ingrese el " + contaNume + "°" +" numero")))){
                if(num[i] == 0){
                    contaNume++;
                    Band2 = true;

                }else{
                    alert("No deje espacios vacios");
                }
                
               }else{
                if(isNaN(num[i])){
                    alert("No deje espacios vacios");
                }else{
                    contaNume++;
                    Band2 = true;

                }
            }

        }while(Band2 == false);

      }
      Band = true;
    }

   }
}while(Band == false);

do{
opcion = prompt("Ingrese la palabra *ascendente* o *ascendentes* si desea ver los numeros de mayor a menor, si quiere ver los numeros de menor a mayor digite *descendente* o *descendentes*");
opcion.toLowerCase();

if(!(opcion)){
    alert("No deje espacios vacios");
}else{
    if(isNaN(opcion)){
        if((opcion == "ascendente") || (opcion == "ascendentes")){
            for(i=0; i<cantNum-1; i++){
                    for(j=i+1; j<cantNum; j++){
                        if(num[i]>num[j]){
                        auxiliar = num[j];
                        num[j] = num[i];
                         num[i] = auxiliar;
                       }
                    }
            }
             
            document.write("<h3>Numeros Ascendentes: </h3>")
            document.write("<table>");
            for(i = 0; i < cantNum; i++){
                document.write("<td><h3>"+num[i]+",</h3></td>");
            }
            document.write("</table>");
            Band3 = true;

        }else if(opcion == "descendente" || opcion == "descendentes"){
            for(i=0; i<cantNum-1; i++){
                for(j=i+1; j<cantNum; j++){
                    if(num[i]<num[j]){
                    auxiliar = num[j];
                    num[j] = num[i];
                     num[i] = auxiliar;
                   }
                }
        }
         
        document.write("<h3>Numeros Descendentes: </h3>")
        document.write("<table>");
        for(i = 0; i < cantNum; i++){
            document.write("<td><h3>"+num[i]+",</h3></td>");
        }
        document.write("</table>");
        Band3 = true;

        }else{
            alert("Dato ingresado no valido");
        }
     
    }else{
        alert("Dato ingresado no valido");
    }
}
}while(Band3  == false);

