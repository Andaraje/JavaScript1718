
// Aleatorizo el orden de las casillas png
var imagenes = ["2", "3", "4", "5", "6", "7", "8", "9"];
imagenes = imagenes.sort(function() {
	return Math.random() - 0.5;
});
imagenes = [imagenes.slice(0, 3), imagenes.slice(3, 6),imagenes.slice(6, 8)];

// Contador de movimientos
var contador = 0;

window.onload=ejecuta;
function ejecuta() {

	//Inicializo contador
	document.getElementById("contador").innerHTML=contador;

	//Relleno el puzzle con las imágenes
	for (var i=0; i<3; i++) {
		var fila = document.getElementById("tbody").children[i];
		for (var j=0; j<3; j++) {
			if (!(i==2 && j==2)) {
				
				var celda = fila.children[j];
				celda.innerHTML = "<img onclick='mover(this)' onmouseenter='activa(this)' onmouseleave='desactiva(this)' class='fichas' src='img/"+imagenes[i][j]+".png' alt='"+imagenes[i][j]+"'>";
			}
		}
	}

	//Botón reiniciar
	document.getElementById("reiniciar").onclick=function(){
		location.reload();
	};
}

function mover(ficha) {

	// Variables necesarias:
	var movida = false; // Para evitar volver a mover la ficha una vez movida en el resto de comprobaciones
	var col = ficha.parentNode.cellIndex; // Columna de la ficha presionada
	
	// Celda derecha?
	if (ficha.parentNode.nextElementSibling && !movida){
		// Celda derecha vacía?
		if (ficha.parentNode.nextElementSibling.innerHTML===""){
			ficha.parentNode.nextElementSibling.appendChild(ficha);
			movida = true;
		}
	}
	// Celda izquierda?
	if (ficha.parentNode.previousElementSibling && !movida){
		// Celda izquierda vacía?
		if (ficha.parentNode.previousElementSibling.innerHTML===""){
			ficha.parentNode.previousElementSibling.appendChild(ficha);
			movida = true;
		}
	}
	// Fila abajo?
	if (ficha.parentNode.parentNode.nextElementSibling && !movida){
		// Celda de fila abajo y misma columna vacía?
		if (ficha.parentNode.parentNode.nextElementSibling.children[col].innerHTML===""){ // celda justo encima de la seleccionada
			ficha.parentNode.parentNode.nextElementSibling.children[col].appendChild(ficha);
			movida = true;
		}
	}
	// Fila arriba?
	if (ficha.parentNode.parentNode.previousElementSibling && !movida){
		// Celda de fila arriba y misma columna vacía?
		if (ficha.parentNode.parentNode.previousElementSibling.children[col].innerHTML===""){ // celda justo encima de la seleccionada
			ficha.parentNode.parentNode.previousElementSibling.children[col].appendChild(ficha);
			movida = true;
		}
	}

	if (movida) {
		//Aumento en uno el contador
		document.getElementById("contador").innerHTML= ++contador;
		var tbody = document.getElementById("tbody");
		ganado(tbody);
	}
		
}

// Comprueba si se ha ganado:
function ganado(tbody) {
	var filas = tbody.children;
	if (filas[0].children[1].firstChild!==null && filas[0].children[1].firstChild.getAttribute("src")=="img/2.png"){
		if (filas[0].children[2].firstChild!==null && filas[0].children[2].firstChild.getAttribute("src")=="img/3.png"){
			if (filas[1].children[0].firstChild!==null && filas[1].children[0].firstChild.getAttribute("src")=="img/4.png"){
				if (filas[1].children[1].firstChild!==null && filas[1].children[1].firstChild.getAttribute("src")=="img/5.png"){
					if (filas[1].children[2].firstChild!==null && filas[1].children[2].firstChild.getAttribute("src")=="img/6.png"){
						if (filas[2].children[0].firstChild!==null && filas[2].children[0].firstChild.getAttribute("src")=="img/7.png"){
							if (filas[2].children[1].firstChild!==null && filas[2].children[1].firstChild.getAttribute("src")=="img/8.png"){
								if (filas[2].children[2].firstChild!==null && filas[2].children[2].firstChild.getAttribute("src")=="img/9.png"){
									alert("Enhorabuena! Has resuelto el puzzle!");
	}}}}}}}}
}


// Añade un efecto si la ficha puede moverse al hacer hover
function activa(ficha) {
	var col = ficha.parentNode.cellIndex; // Columna de la ficha presionada	
	// Celda derecha?
	if (ficha.parentNode.nextElementSibling){
		// Celda derecha vacía?
		if (ficha.parentNode.nextElementSibling.innerHTML===""){
			ficha.parentNode.style.opacity="0.8";
		}
	}
	// Celda izquierda?
	if (ficha.parentNode.previousElementSibling){
		// Celda izquierda vacía?
		if (ficha.parentNode.previousElementSibling.innerHTML===""){
			ficha.parentNode.style.opacity="0.8";
		}
	}
	// Fila abajo?
	if (ficha.parentNode.parentNode.nextElementSibling){
		// Celda de fila abajo y misma columna vacía?
		if (ficha.parentNode.parentNode.nextElementSibling.children[col].innerHTML===""){ // celda justo encima de la seleccionada
			ficha.parentNode.style.opacity="0.8";
		}
	}
	// Fila arriba?
	if (ficha.parentNode.parentNode.previousElementSibling){
		// Celda de fila arriba y misma columna vacía?
		if (ficha.parentNode.parentNode.previousElementSibling.children[col].innerHTML===""){ // celda justo encima de la seleccionada
			ficha.parentNode.style.opacity="0.8";
		}
	}
}

// Desactiva el efecto de la ficha que puede moverse al finalizar un hover sobre ella.
function desactiva(ficha) {
	var col = ficha.parentNode.cellIndex; // Columna de la ficha presionada	
	// Celda derecha?
	if (ficha.parentNode.nextElementSibling){
		// Celda derecha vacía?
		if (ficha.parentNode.nextElementSibling.innerHTML===""){
			ficha.parentNode.style.opacity="1";
		}
	}
	// Celda izquierda?
	if (ficha.parentNode.previousElementSibling){
		// Celda izquierda vacía?
		if (ficha.parentNode.previousElementSibling.innerHTML===""){
			ficha.parentNode.style.opacity="1";
		}
	}
	// Fila abajo?
	if (ficha.parentNode.parentNode.nextElementSibling){
		// Celda de fila abajo y misma columna vacía?
		if (ficha.parentNode.parentNode.nextElementSibling.children[col].innerHTML===""){ // celda justo encima de la seleccionada
			ficha.parentNode.style.opacity="1";
		}
	}
	// Fila arriba?
	if (ficha.parentNode.parentNode.previousElementSibling){
		// Celda de fila arriba y misma columna vacía?
		if (ficha.parentNode.parentNode.previousElementSibling.children[col].innerHTML===""){ // celda justo encima de la seleccionada
			ficha.parentNode.style.opacity="1";
		}
	}
}
