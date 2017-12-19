//libreria mantenimiento concesionario SEAT JAE

var miConcesionario = new Concesionario();

function comprarCoche(){
    var form = document.body.firstElementChild;
    var mat = form.matricula.value;
    var marca = form.marca.value;
    var color = form.color.value;
    var anio = form.anio.value;
    var combustible = form.combustible.value;
    var c1 = new Coche (mat,marca,color,anio,combustible);
    miConcesionario.comprar(c1);
    //actualizo web
    document.getElementById("listado").innerHTML=miConcesionario.imprimeCatalogo();
    document.getElementById("venta").innerHTML=miConcesionario.rellenaSelect();
}
function venderCoche(){
    var i = document.getElementById("venta").value;
    miConcesionario.vender(i);
    document.getElementById("listado").innerHTML=miConcesionario.imprimeCatalogo();
    document.getElementById("venta").innerHTML=miConcesionario.rellenaSelect();
}