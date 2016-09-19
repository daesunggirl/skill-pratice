var link=document.getElementById("log")
var flag=true;
link.onclick=function(){
    if(flag==true){
    	var log=document.getElementById("login");
		log.style.display="block";
		flag=!flag;
		return false;
    }else{log.style.display="none";}
	
}
var warn=document.getElementById("warn");
var warn_txt=document.getElementById("warn_txt");
warn.onmouseover=function(){
warn_txt.style.display="block";
}
warn.onmouseout=function(){
	warn_txt.style.display="none";
}

//换肤
var hit=false;
var skin=document.getElementById("skin");
skin.onclick=function (){
	var link=document.getElementsByTagName("link")[1];
	
	if(hit==true){
		link.href="";
		hit = !hit;
	}else{
		link.href="皮肤1.css";
	    skin.style.border="none";
	    hit = !hit;
	    return false;
	}
	

}