            //获取样式
            function getStyle(obj,attr){
            	if(obj.currentStyle){
            		return obj.currentStyle[attr];
            	}else{
            		return getComputedStyle(obj,false)[attr];
            	}           	
            }
            //多物体多值运动
            function move(obj,json,fnEnd){
                clearInterval(obj.timer);               
                obj.timer=setInterval(function(){
                    var stop=true;
                    for(var attr in json){
                    var cur=0;
                    if(attr=='opacity'){
                        cur=parseInt(parseFloat(getStyle(obj,attr))*100);
                    }else{
                        cur=parseInt(getStyle(obj,attr));
                    }
                    var speed=(json[attr]-cur)/7;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(cur!=json[attr]){     //不等于时为false,全都等于了，stop就为true了，可以取消计时器了。
                        stop=false;
                    }
                    if(attr=='opacity'){
                        obj.style.filter='alpha(opacity='+(cur+speed)+')';
                        obj.style.opacity=(cur+speed)/100;
                    }else{
                        obj.style[attr]=cur+speed+'px';
                        
                
                        }
                    }
                 
                 if(stop){
                        clearInterval(obj.timer);
                        if(fnEnd) fnEnd();
                    }
                },20);
            }
//链式运动
            function moveLater(obj,attr,iTarget,fnEnd){
                clearInterval(obj.timer);
                obj.timer=setInterval(function(){
                    var cur=0;
                    if(attr=='opacity'){
                        cur=parseInt(parseFloat(getStyle(obj,attr))*100);
                    }else{
                        cur=parseInt(getStyle(obj,attr));
                    }
                    var speed=(iTarget-cur)/7;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(cur==iTarget){
                        clearInterval(obj.timer);
                        if(fnEnd) fnEnd();
                    }else{
                        if(attr=='opacity'){
                            obj.style.filter='alpha(opacity='+(cur+speed)+')';
                            obj.style.opacity=(cur+speed)/100;
                        }else{
                            obj.style[attr]=cur+speed+'px';
                        }
                    }
                },20);
            }