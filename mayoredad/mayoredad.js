function MayorEdad() {
    
            var fecha = document.getElementById('nacimiento').value;        
            var ahora  = new Date();

            fecha = fecha.split('/'); 
            var Dia = fecha[0];
            var Mes = fecha[1]-1; //Le restamos uno ya que los meses van del 0 al 11
            var Anno = fecha[2];
            var fechabuena = new Date (Anno,Mes,Dia);

            var Milisegundos = ahora - fechabuena; 
            var Diferencia =  new Date(Milisegundos); 
            var AnnosActuales = Diferencia.getFullYear()-1970;

            document.getElementById('acceso').value = (AnnosActuales >= 18)?"Si": "No";
            document.getElementById('acceso').style.backgroundColor = (AnnosActuales >= 18)?"Green": "Red";
           
}