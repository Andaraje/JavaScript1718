/*

Un Objeto coche tiene :

	Matrícula
	Marca
	Color
	Año
	Combustible

Y sus métodos son:

	Imprime -> 
	Pinta -> Cambia el color del coche


Tendremos una colección (Concesionario) de coches cuyos métodos son:

	Imprime catálogo -> Imprime los coches que aún están en el concesionario
	Vende -> Saca a un coche del catálogo
	Compra -> Añade un nuevo coche al catálogo 




Mantenimiento:

	Un formulario con los datos del coche (Matrícula, marca, color, año y combustible)
	en el que el combustible será un select (Diesel o Gasolina).
	Un botón comprar que llamará al método del Concesionario.
	Debajo del formulario aparecerá una tabla con el catálogo de coches que hay en el
	concesionario.
	Cada vez que se compre o venda un coche se actualizará el catálogo y debajo un pequeño 
	formulario para vender los coches dependiendo de su matrícula

*/ 


//Constructor

function Coche(matricula,marca,color,anno.combustible) {

	this.matricula=matricula||"";
	this.marca=marca||"";
	this.color=color||"";
	this.anno=anno||"";
	this.combustible=combustible||"";
}

Coche.prototype.imprime = function() {

    var texto+=	"<tr><td>"+matricula+"</td><td>"+marca+"</td><td>"+color+"</td><td>"+anno+"</td><td>"+combustible+"</td></tr>";
    return texto;
}

Coche.prototype.pinta = function(colornew) {

	this.color = colornew;
}

function Concesionario(json) {

    this.Concesionario=[];

    if(json){

        for (var i=0 = 0; i < json.length; i++) {

        this.Concesionario.push(new Coche(json[i].matricula,json[i].marca,json[i].color,json[i].anno,json[i].combustible)) 
        }
    }
}

Concesionario.prototype.imprimeCatalogo = function() {

	for (var i = 0; Concesionario.length - 1; i--) {

		document.getElementById('cuerpotabla').innerHTML += Concesionario[i].imprime();
	}
}

Concesionario.prototype.comprar = function(matri, mar, col, an, combu) {

	document.getElementById('matricula').value = matri;
	document.getElementById('marca').value = mar;
	document.getElementById('color').value = col;
	document.getElementById('anno').value = an;
	document.getElementById('combustible').value = combu;

	var coche = new Coche(matri,mar,col,an,combu)

	Concesionario.push(coche);

	Concesionario.imprimeCatalogo();
}


Concesionario.prototype.vender = function(indice) {

	document.getElementById('vender').value = indice;

	Concesionario.slice(indice);

	Concesionario.imprimeCatalogo();
}
