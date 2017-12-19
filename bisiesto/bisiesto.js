function VerBisiesto() {
    
            Anno = document.getElementById('año').value; 

            FechaIndicada = new Date (Anno,1,29); 
            document.getElementById('resultado').value = (FechaIndicada.getDate()==29)?"Si": "No";
             
}
