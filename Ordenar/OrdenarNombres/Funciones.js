var Nombres = ["Juan","Paula","Sofia","Ana","Wally","Lucas"];


function Anadir() {
    
        var Nombre = (document.getElementById("NomNuevo").value);
        Nombres.push(Nombre);
        document.getElementById("CuadroNombres").innerHTML = Nombres.join(" \n");
}



function Ordenar(){

    if (document.getElementById("Creciente").checked == true ) {
        
        Nombres.sort();
        document.getElementById("CuadroNombres").innerHTML = Nombres.join(" \n");

    }
    else{

        Nombres.sort();
        Nombres.reverse(); 
        document.getElementById("CuadroNombres").innerHTML = Nombres.join(" \n");

    }
    
    
 }

    