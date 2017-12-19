
var Fechas = ["30/11/1998", "03/12/1947", "19/09/2000"];



function PasarFecha(Fecha){
    
    Fecha = Fecha.split('/'); 
    var Dia = Fecha[0];
    var Mes = Fecha[1]-1; //Le restamos uno ya que los meses van del 0 al 11
    var Anno = Fecha[2];
    var FechaOK = new Date (Anno,Mes,Dia);
    
    return FechaOK;
}

function compara(Fecha1,Fecha2)
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



function myFunction(){

    document.getElementById("FechasDesordenadas").innerHTML = Fechas.join("  -  ");
    Fechas.sort(compara);
    document.getElementById("FechasOrdenadas").innerHTML = Fechas.join("  -  ");
    
 }
 
    