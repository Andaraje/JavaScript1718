obj={};
obj.cabeceras=[];
obj.cabeceras.push({nombre:"nombre",tipo:"texto",longitud:40});
obj.cabeceras.push({nombre:"apellidos",tipo:"texto",longitud:40});
obj.cabeceras.push({nombre:"edad",tipo:"number"});
obj.datos=[];
//obj.datos.push({nombre:"silverio",apellidos:"ruiz",edad:22});
//localStorage.setItem("alumnos",JSON.stringify(obj));
window.addEventListener("load", function(){
	document.getElementsByTagName("table")[0].cargarEstructura();
	document.getElementsByTagName("table")[0].cargarDatos();
})
HTMLTableElement.prototype.cargarEstructura=function(){
	if(this.getAttribute("datos")!==undefined){
		if(localStorage.getItem(this.getAttribute("datos"))!==null){
			var json = JSON.parse(localStorage.getItem(this.getAttribute("datos")));
			var cabeceras=json.cabeceras;
			var thead = document.createElement("thead");
			var tr = document.createElement("tr");
			for(var i=0; i<cabeceras.length;i++){
				var th=document.createElement("th");
				th.innerHTML=cabeceras[i].nombre;
				tr.appendChild(th);
				
			}
			if (this.className.indexOf("editable")>-1){
				var th=document.createElement("th");
				th.innerHTML="Acciones";
				tr.appendChild(th);
				this.editable=true;
			}
			thead.appendChild(tr);
			this.appendChild(thead);
			this.estructura=cabeceras;
			
			if(this.editable){
				var tfoot=document.createElement("tfoot");
				var tr=document.createElement("tr");
				for(i=0; i<this.estructura.length;i++){
					var td=document.createElement("td");
					var input= document.createElement("input");
					input.setAttribute("name",this.estructura[i].nombre);
					input.type=this.estructura[i].tipo;
					if (this.estructura[i].tipo=="text"){
						input.maxlength=this.estructura[i].longitud;
					}
					td.appendChild(input);
					tr.appendChild(td)
				}
				var td=document.createElement("td");
				var text=document.createElement("input");
				text.setAttribute("type", "button");
				text.setAttribute("value", "Guardar");
				text.onclick=function(){
					var obj = JSON.parse(localStorage.getItem("alumnos"));
					var nombre= document.getElementsByName("nombre")[0].value;
					obj.datos.push({nombre : nombre,apellidos : document.getElementsByName("apellidos")[0].value, edad : document.getElementsByName("edad")[0].value});
					localStorage.setItem("alumnos", JSON.stringify(obj));
					location.reload(true);
				}
				td.appendChild(text);
				tr.appendChild(td);
				this.appendChild(tfoot);
				tfoot.appendChild(tr);
			}
		}
	}
}

HTMLTableElement.prototype.cargarDatos=function(){
	if(this.getAttribute("datos")!==undefined){
		if(localStorage.getItem(this.getAttribute("datos"))!==null){
			var json = JSON.parse(localStorage.getItem(this.getAttribute("datos")));//parse añade el valor de la entrada datos si existe al json
			var datos=json.datos;
			if(this.getElementsByTagName(tbody)[0]){
				tbody=this.getElementsByTagName(tbody);
				tbody.innerHTML="";
			}else{
				var tbody = document.createElement("tbody");
				this.appendChild(tbody);
			}
			/*var tbody = document.createElement("thead");
			var tr = document.createElement("tr");*/
			for (var i=0;i<datos.length;i++){
				var tr = document.createElement("tr");
				for(propiedad in datos[i]){
					var td = document.createElement("td");
					td.innerHTML=datos[i][propiedad];
					tr.appendChild(td);
				}

				if(this.editable){
					tr.indice=i;
					var td=document.createElement("td");
					var span=document.createElement("span");
					span.className="boton btnBorrar";
					span.addEventListener("click",function(){
						var Posicion = td.sectionRowIndex;
						var Array = JSON.parse(localStorage.getItem("alumnos"));
						Array['datos'].splice(Posicion, 1);
						localStorage.setItem("alumnos", JSON.stringify(Array));
						location.reload(true);
					});
					
					td.appendChild(span);
					tr.appendChild(td);
					
					var span=document.createElement("span");
					span.className="boton btnModificar";
					span.addEventListener("click",function(){
						var fila = this.parentNode.parentNode;
						var Posicion = fila.sectionRowIndex;
						var Array = JSON.parse(localStorage.getItem("alumnos"));
						Array.datos.splice(Posicion, 1);
						var fila=this.parentNode.parentNode;
						var hijos= fila.cells;
						for (var i = 0; i < (hijos.length-1); i++) {
							var celda=hijos[i].innerHTML;
							hijos[i].innerHTML="";
							var input = document.createElement("input");
							input.value=celda;
							if(i==0){
								input.setAttribute("name", "nombrem");
							}
							if(i==1){
								input.setAttribute("name", "apellidom");
							}
							if(i==2){
								input.setAttribute("name", "edadm");
							}
							hijos[i].appendChild(input);
							
						}
						var celda=this.parentNode;
						this.parentNode.innerHTML="";
						var btnguardar=document.createElement("input");
						var btncancelar=document.createElement("input");
						btnguardar.setAttribute("type", "button");
						//btnguardar.setAttribute("value", "save");
						btnguardar.setAttribute("class", "boton btnGuardar")
						btncancelar.setAttribute("type", "button");
						btncancelar.setAttribute("class", "boton btnCancelar");
						btnguardar.onclick=function(){
							var nombrem = document.getElementsByName("nombrem")[0].value;
							var apellidom = document.getElementsByName("apellidom")[0].value;
							var edadm = document.getElementsByName("edadm")[0].value;
							Array.datos.push({nombre:nombrem,apellido:apellidom, edad:edadm});
							localStorage.setItem("alumnos", JSON.stringify(Array));
							location.reload(true);
						}
						btncancelar.onclick=function(){
							location.reload(true);
						}
						celda.appendChild(btnguardar);
						celda.appendChild(btncancelar);
					});
					
					td.appendChild(span);
					tr.appendChild(td);
					
					
				}
			tbody.appendChild(tr);//unir el tr al thead
			}
		}
			
			this.datos=datos;
		}
		document.getElementById("table").setAttribute("border", "2");
		document.getElementById("table").style.borderCollapse = "collapse";
	}