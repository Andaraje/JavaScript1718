function Concesionario(){
    this.coches=[];
}

Concesionario.prototype.comprar=function(coche){
    this.coches.push(coche);
}

Concesionario.prototype.vender=function(posicion){
    this.coches.splice(posicion, posicion + 1);
}
Concesionario.prototype.imprimeCatalogo=function(){
    var respuesta="";
    for (var i = 0; i<this.coches.length; i++){
        respuesta+=this.coches[i].imprime();
    }
    return respuesta;
}
Concesionario.prototype.rellenaSelect=function(){
    var respuesta= "";
    for (var i = 0; i<this.coches.length; i++){
        respuesta+="<option value='" + i + "'>" + this.coches[i].mat + "</option>";
    }
    return respuesta;
}