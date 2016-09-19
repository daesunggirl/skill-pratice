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
function displayFont(){
	var para=document.getElementsByTagName("p");
	for(var i=0;i<para.length;i++){
		console.log(para.length+para[i]);
		var a=para[i];
		  a.onmouseover=function(){
		 a.style.fontWeight="bold";
	   }
	     a.onmouseout=function(){
		a.style.fontWeight="normal";
	   }
	
	

	}
	
}
function getNextElement(node){
	if(node.nodeType==1) return node;
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
}
function styleHeaderSibling(){
	if (!document.getElementsByTagName) return false;
	var header=document.getElementsByTagName("h1");
	var nextEle;
	for(var i=0;i<header.length;i++){
		nextEle=getNextElement(header[i].nextSibling);
		nextEle.style.backgroundColor="grey";
		nextEle.style.fontSize="1.2em";
	}
}
function stripeTables(){
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");

	for(var i=0;i<tables.length;i++){
			var odd,rows;
		odd=false;
		rows=document.getElementsByTagName("tr");
		for(var odd=0;odd<rows.length;odd++){
			if(odd%2==0){
				rows[odd].style.backgroundColor="#ffc";
				
			}
			// else{

			// 	odd=true;
			// }
		}
	}
}
function positionMessage(){
	if(!document.getElementById) return false;
	var ele=document.getElementById("move");
	ele.style.position="relative";
	ele.style.left="100px";
	ele.style.top="50px";
	moveMessage("move",200,100,10);
	var ele2=document.getElementById("move2");
	ele2.style.position="relative";
	ele2.style.left="100px";
	ele2.style.top="50px";
	moveMessage("move2",-100,80,10);
	//movement=setTimeout("moveMessage()",3000);

}
function moveMessage(eleId,finx,finy,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(eleId)) return false;
	var ele=document.getElementById(eleId);
	//alert(typeof ele.style.left);
	var xpos=parseInt(ele.style.left);
	var ypos=parseInt(ele.style.top);
	if(xpos==finx&&ypos==finy){
		return true;}
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
			ypos--;
		}
	ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";
	var repeat="moveMessage('"+eleId+"',"+finx+","+finy+","+interval+")";
	movement=setTimeout(repeat,interval);
}
//clearTimeout(movement);
addLoadEvent(displayFont);
addLoadEvent(styleHeaderSibling);
addLoadEvent(stripeTables);
addLoadEvent(positionMessage);
