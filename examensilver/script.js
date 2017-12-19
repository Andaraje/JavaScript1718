/* crear un parking que guarde matriculas de coche, en las cuales se guardan en una tabla, que tendrá un botón de irse
al irse, se le notificará con el saldo a pagar. Habra coches que estén pillados por la policia los cuales podrán entrar pero no podrán
irse */
window.addEventListener("load", cargar);
var aparcar;
function cargar() {
    var tbodyEdit = document.querySelectorAll("tbody.tEditable");
    for (var i = 0; i < tbodyEdit.length; i++) {
        var tabla = tbodyEdit[i];
        var row = tabla.children;
        for (var j = 0; j < row.length; j++) {
            var celda=document.createElement("td");
            celda.innerHTML="irse";
            celda.addEventListener("click", irse);
            row[j].appendChild(celda);
        }
        
        
    }
}
function irse(){
    var fila = this.parentNode;
    fila.parentNode.removeChild(fila);
}
function Aparcar(){
    var FechaHoraAparcamiento=new Date();
    aparcar = FechaHoraAparcamiento.getTime();
}