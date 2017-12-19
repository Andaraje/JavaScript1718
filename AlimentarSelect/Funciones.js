function Generar() {

    var Productos = [];
    Productos =  (document.getElementById('cajatexto').value).split('\n');
    var Opciones = "";

    for (var i = 0; i < Productos.length; i++) {

        var dividido = Productos[i].split(':');

        Opciones +="<option value="+dividido[0]+">"+dividido[1]+"</option>"; 
        
    }

    document.getElementById('lista').innerHTML = Opciones;

}


function Cargar() {

    var Opciones = "";

    for (var i = 0; i < Datos.length; i++) {

        Opciones +="<option value="+Datos[i].Codigo+">"+Datos[i].Descripcion+"</option>"; 
        
    }

    document.getElementById('lista').innerHTML = Opciones;
    
}

