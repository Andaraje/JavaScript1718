//prototipos para parrafo
HTMLParagraphElement.prototype.mayuscula=function(){
	var i;
	for(i=0; i<this.childNodes.length; i++)
	{
		if(this.childNodes[i].nodeType==3){
			this.childNodes[i].data=this.childNodes[i].data.toUpperCase();
		}
	}
}