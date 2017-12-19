
//var Valores = ["32.85","31.867","78.87","2.584","879.5","8.95"];
//var Valores = ["Juan","Paula","Sofia","Ana","Wally","Lucas"];
//var Valores = ["30/11/1998", "03/12/1947", "19/09/2000"];
var Valores = [];

function Anadir() {
    
        var Valor = document.getElementById("Valor").value;
        Valores.push(Valor);
        document.getElementById("Cuadro").innerHTML = Valores.join(" \n");
}


function PasarFecha(Fecha){
    
    Fecha = Fecha.split('/'); 
    var Dia = Fecha[0];
    var Mes = Fecha[1]-1; //Le restamos uno ya que los meses van del 0 al 11
    var Anno = Fecha[2];
    var FechaOK = new Date (Anno,Mes,Dia);
    
    return FechaOK;
}


function comparaFecha(Fecha1,Fecha2)
{

    Fecha1 = PasarFecha(Fecha1);
    Fecha2 = PasarFecha(Fecha2);

    if(Fecha1.getFullYear() == Fecha2.getFullYear()){

        if (condition) {
            return Fecha1.getDate()-Fecha2.getDate();
        }
        else{
            return Fecha1.getMonth()-Fecha2.getMonth();
        }
       
    }
    else{

        return Fecha1.getFullYear() - Fecha2.getFullYear();
    }
          
}

function comparaNumeros(Num1,Num2)
{
    return Num1-Num2;         
}


function Ordenar(){

    if (document.getElementById("Creciente").checked == true ) { //Creciente
        
        if (Valores[0].indexOf("/") > -1) { //Si encuentra una barra , es una fecha

            alert("Son Fechas");
            Valores.sort(comparaFecha);   
            
        }
        else if((Valores[0]-0) != Valores[0] ){ //Si encuentra al restarle 0 es diferente al valor , es un nombre

            alert("Son Nombres");
            Valores.sort();   

        }
        else{//Es un numero

            alert("Son Números");
            Valores.sort(comparaNumeros);   

        }

        document.getElementById("Cuadro").innerHTML = Valores.join(" \n");

    }
    else{//Decreciente

        if (Valores[0].indexOf("/") > -1) { //Si encuentra una barra , es una fecha
            
                Valores.sort(comparaFecha);   
                Valores.reverse();
                        
        }
        else if((Valores[0]-0) != Valores[0] ){ //Si encuentra al restarle 0 es diferente al valor , es un nombre
            
                Valores.sort(); 
                Valores.reverse();   
            
        }           
        else { //Si no es fecha se puede ordenar por el mismo Valor
            
                Valores.sort(comparaNumeros); 
                Valores.reverse();  
            
        }
        
        document.getElementById("Cuadro").innerHTML = Valores.join(" \n");

    }
    
    
 }

    