var aparcar;
var irse;
var segundoss = 0;
var minutos = 0;
var horas = 0;


function Aparca() {
    control = setInterval(tiempo, 1000);
    var FechaHoraAparcameinto=new Date();
    aparcar = FechaHoraAparcameinto.getTime();
    
    document.getElementById('Aparcar').disabled= true;    
    document.getElementById('Irse').disabled=false;
    document.getElementById('Precio').value = "";
    

   
    
}
function tiempo(){
    if(segundoss<60)
    {
        segundoss++;
    }
    if(segundoss==60){
        segundoss=0;
        minutos++;
    }
    if(minutos==59)
    {
        minutos=0;
        horas++;
    }
    var divt = document.getElementById("divt").innerHTML = horas + " : " + minutos + " : " + segundoss;
    
}

function Salir(){
        clearInterval(control);
        var FechaHoraIrse=new Date();
        irse = FechaHoraIrse.getTime();

        var total = irse - aparcar;
        var segundos = (total/1000);
        var precio = (segundos*2).toFixed();

        document.getElementById('Aparcar').disabled= false;
        document.getElementById('Irse').disabled=true;

        document.getElementById('Precio').value = precio+" Cent";
        segundoss=0;
        minutos=0;
        horas=0;

    }
    