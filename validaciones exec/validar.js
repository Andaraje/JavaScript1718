
function ValidarDni() {
    var dni = document.getElementById('dni').value;
    var expReg = /^(\d{8})(\w)$/;
    if(expReg.exec(dni)==null){
        alert('formato no valido');
    }else{
        var ar=expReg.exec(dni);
        var cadena=["T", "R" ,"W" ,"A" ,"G" ,"M" ,"Y" ,"F" ,"P" ,"D" ,"X" ,"B" ,"N" ,"J" ,"Z" ,"S", "Q" ,"V" ,"H" ,"L", "C", "K" ,"E", "T"] ;
        var numero = ar[1];
        var letra = ar[2].toUpperCase();
        numero = numero % 23;
        if (letra==cadena[numero]){
            alert('el numero es correcto');
        }else{
            alert('la letra no coincide');
        }

    }
}
function ValidarMac() {
    var mac = document.getElementById("mac").value;
    var expReg = /^([0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}$/
    if(expReg.exec(mac)==null){
        alert('Formato no válido');
    }else{
        alert('Formato válido');
    }
}
function ValidarCredito(){
    var credi = document.getElementById("credit").value;
    var expReg = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/
    if(expReg.exec(credit)==null){
        alert('Formato no válido');
    }else{
        alert('Formato válido');
    }
}
function ValidarCuenta(){
    var expReg =/(^\w{2}\d{2})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})/
    var cuenta = document.getElementById("cuenta").value;
    if(expReg.exec(cuenta)==null){
        alert('formato NO válido');
    }else{
        alert('formato valido');
    }
}
function ValidarFecha(){
    var expReg =/^([1-9]|[1|2][\d]|[3][0-1])-(([1-9])|([1][1|2]))-\d{2,4}$/
    var fecha = document.getElementById("fecha").value;
    if(expReg.exec(fecha)==null){
        alert('formato NO válido');
    }else{
        alert('formato valido');
    }
}
function ValidarHora(){
    var expReg =/^([\d]|[1][\d]|[2][0-3]):([\d]|[0-5][\d]):([\d]|[0-5][\d])$/
    var hora = document.getElementById("hora").value;
    if(expReg.exec(hora)==null){
        alert('formato NO válido');
    }else{
        alert('formato valido');
    }
}