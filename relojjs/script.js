function Reloj(canvas, milisegundos){
		this.canvas=canvas;
		this.ctx= canvas.getContext("2d");
		this.temporizador=null;
		this.milisegundos=milisegundos||new Date().getTime();
	}
	
	Reloj.prototype.arrancar=function(){
		var objeto=this;
		return function () {
			if(! objeto.temporizador) {
				objeto.temporizador=window.setInterval(objeto.pinta(), 30);
			}
		}
	}
	Reloj.prototype.parar=function(){
		var objeto=this;
		return function(){
			if (objeto.temporizador){
				window.clearInterval(objeto.temporizador);
				objeto.temporizador=null;
			}
		}
	}
	Reloj.prototype.pinta=function(){
		var objeto=this;
		return function(){
			objeto.milisegundos+=30;
			var segundo=(new Date()).getSeconds();
			var angulo=(segundo-15)*Math.PI*2/60;
			var hora=(new Date()).getHours();
			//limpiar ctx
			objeto.ctx.clearRect(0,0, objeto.canvas.width, objeto.canvas.height);
		
			//pintar circulo
			objeto.ctx.beginPath();
			objeto.ctx.arc(50,50,40,0,2*Math.PI*2);
			objeto.ctx.stroke();
			
			//pintar segundero
			
			
            var x= 30 * Math.cos(angulo)+50;
            var y= 30 * Math.sin(angulo)+50;
            objeto.ctx.moveTo(50,50);
            objeto.ctx.lineTo(x, y);
            objeto.ctx.stroke();
			
			//pintar minutero
			var minuto=(new Date()).getMinutes();
			var angulo=(minuto-15)*Math.PI*2/60;
            var x= 25 * Math.cos(angulo)+50;
            var y= 25 * Math.sin(angulo)+50;
            objeto.ctx.moveTo(50,50);
            objeto.ctx.lineTo(x, y);
            objeto.ctx.stroke();
			
			//pintar hora
			var angulo=(hora-3)*Math.PI*2/12;
            var x= 20 * Math.cos(angulo)+50;
            var y= 20 * Math.sin(angulo)+50;
            objeto.ctx.moveTo(50,50);
            objeto.ctx.lineTo(x, y);
            objeto.ctx.stroke();
		}
	}
	window.addEventListener("load", function() {
		var r1= new Reloj(document.getElementById("reloj"));
		//r1.arrancar();
		var btArranca=document.getElementById("arranca");
		btArranca.addEventListener("click", r1.arrancar());
		var btPara=document.getElementById("para");
		btPara.addEventListener("click", r1.parar());
	})
	/**var c = document.getElementById("reloj");
        var ctx = c.getContext("2d");
	
        function pintarEsfera(donde){
            donde.beginPath();
            donde.arc(50,50,40,0,2*Math.PI);
            donde.stroke();
        }
        function pintarPalito(donde, segundo){
            var angulo=(segundo-15) * Math.PI * 2 /60;
            var x= 30 * Math.cos(angulo)+50;
            var y= 30 * Math.sin(angulo)+50;
            donde.moveTo(50,50);
            donde.lineTo(x, y);
            donde.stroke();
			
            /*reloj alreves angulo=segundos*Math.pi*2 / 60
            x=30 * cos(angulo)
            y=30 * sen(angulo)

        }
		function pintarMinutero(donde, minuto){
            var angulo=(minuto-15) * Math.PI * 2 /60;
            var x= 20 * Math.cos(angulo)+50;
            var y= 20 * Math.sin(angulo)+50;
            donde.moveTo(50,50);
            donde.lineTo(x, y);
            donde.stroke();
			

        }
		function pintarHora(donde, hora){
            var angulo=(hora-15) * Math.PI * 2 /24;
            var x= 15 * Math.cos(angulo)+50;
            var y= 15 * Math.sin(angulo)+50;
            donde.moveTo(50,50);
            donde.lineTo(x, y);
            donde.stroke();
			

        }
		function limpiar(donde,canvas) {
			donde.clearRect(0,0, canvas.width, canvas.height);
		}
		function reloj(donde,canvas) {
			var segActual=(new Date()).getSeconds();
			var minActual=(new Date()).getMinutes();
			var horActual=(new Date()).getHours();
			limpiar(donde, canvas);
			pintarEsfera(donde);
			pintarPalito(donde, segActual);
			pintarMinutero(donde, minActual);
			pintarHora(donde, horActual);
		}
		window.setInterval(function() {reloj(ctx,c)},30);*/