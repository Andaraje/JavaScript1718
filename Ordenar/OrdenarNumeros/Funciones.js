
var Numeros = ["32.85","31.867","78.87","2.584","879.5","8.95"];


function Anadir() {
    
        var Numero = ((document.getElementById("NumNuevo").value)-0).toFixed(document.getElementById("Decimales").value);
        Numeros.push(Numero);
        document.getElementById("CuadroFechas").innerHTML = Numeros.join(" \n");
}


function compara(Num1,Num2)
{

   return Num1 - Num2;
          
}



function Ordenar(){

    if (document.getElementById("Creciente").checked == true ) {
        
        Numeros.sort(compara);
        document.getElementById("CuadroFechas").innerHTML = Numeros.join(" \n");

    }
    else{

        Numeros.sort(compara);
        Numeros.reverse(); 
        document.getElementById("CuadroFechas").innerHTML = Numeros.join(" \n");

    }
    
    
 }

    