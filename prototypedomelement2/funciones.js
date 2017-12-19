//funciones
window.addEventListener("load",multiple);
function multiple (){

	var selects=document.getElementsByTagName("select");
	for(var i=0; i<selects.length; i++){
		selects[i].multiple = true;
	}
	document.getElementById("btizquierda").addEventListener("click", izquierda);
	document.getElementById("btderecha").addEventListener("click", derecha);
}
function derecha(){
	var si= document.getElementById("izquierda").selectedOptions;
	var sd= document.getElementById("derecha");
	
	for (var i=si.length; i=0; i--)
	{
		sd.appendChild(si[i]);
	}
}
function izquierda(){
	var si= document.getElementById("derecha").selectedOptions;
	var sd= document.getElementById("izquierda").value;
	
	for (var i=sd.length; i=0; i--)
	{
		si.appendChild(sd[i]);
	}
}
HTMLSelectElement.prototype.movertodos=function (destino){
	while(this.options.length>0)
	{
		var actual=this.selectedOptions[0];
		destino.appendChild(this.options[0]);
		actual.selected= false;
	}
}
HTMLSelectElement.prototype.moverseleccionados=function (destino){
	while(this.selectedOptions.length>0)
	{
		var actual=this.selectedOptions[0];
		destino.appendChild(this.selectedOptions[0]);
		actual.selected= false;
	}
}