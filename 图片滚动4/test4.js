function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
var movement;
function moveElement(eleId,finx,finy,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(eleId)) return false;
	var ele=document.getElementById(eleId);
	console.log("1");
	if(ele.movement){
		clearTimeout(ele.movement);
		console.log("2");
	}
	var xpos=parseInt(ele.style.left);
	var ypos=parseInt(ele.style.top);
	var dist=0;
	if(xpos==finx&&ypos==finy){return true;}
	console.log(xpos+"/"+finx);
	if(xpos<finx){
		xpos++;
	}
	if(xpos>finx){
		xpos--;
	}
	if(ypos<finy){
		ypos++;
	}
	if(ypos>finy){
		xpos--;
	}
	ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";
	var repeat="moveElement('"+eleId+"',"+finx+","+finy+","+interval+")";
	ele.movement=setTimeout(repeat,interval);
}
function prepareSlideshow(){
	if (!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("list")) return false;
	if(!document.getElementById("first")) return false;
	var pic=document.getElementById("first");
	pic.style.position="absolute";
	pic.style.left="0px";
	pic.style.top="0px";
	var list=document.getElementById("list");
	var link=list.getElementsByTagName("a");
	link[0].onmouseover=function(){
		moveElement("first",-100,0,10);
	}
	link[1].onmouseover=function(){
		moveElement("first",-200,0,10);
	}
	link[2].onmouseover=function(){
		moveElement("first",-300,0,10);
	}

}
addLoadEvent(prepareSlideshow);