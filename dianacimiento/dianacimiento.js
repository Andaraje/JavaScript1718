function MuestraDia() {
    
            DatosFecha = document.getElementById('Fecha').value; 
            DatosFecha = DatosFecha.split('/'); 
    
            Dia = DatosFecha[0];
            Mes = DatosFecha[1]-1; //Le restamos uno ya que los meses van del 0 al 11
            Anno = DatosFecha[2];
            FechaOK = new Date (Anno,Mes,Dia); 
    
            var DiasSemana = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
            document.getElementById('DiaSemana').value = DiasSemana[FechaOK.getDay()]; //Escribimos el dia de la semana en su cuadro correspondiente
}
