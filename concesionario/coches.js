//objeto coche
function Coche(mat, marca, color, anno, combustible){
    this.mat=mat;
    this.marca=marca;
    this.color=color;
    this.anno=anno;
    this.combustible=combustible;
}
Coche.prototype.pinta=function(color){
    this.color=color;
}
Coche.prototype.imprime=function()
{
    
    for(i in this){
        if(typeof(this[i])!="function"){
            var hilera = document.createElement("tr");
            var celda = document.createElement("td");
            var textocelda = document.createTextNode(this[i]);
            celda.appendChild(textocelda);
            hilera.appendChild(celda);
            var tabla = document.getElementById("listado");
            tabla.appendChild(hilera);
        }
    }
        
            
}
