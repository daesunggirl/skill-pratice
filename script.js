	window.onload=function(){
				/*图片轮播*/
		     	var index=document.getElementById('index');
		     	var lis=index.getElementsByTagName('li');
		     	var play=document.getElementById('play');
		     	var container=document.getElementById('container');
		     	now=0;
                for(var i=0;i<lis.length;i++){
                	lis[i].tag=i;
                	lis[i].onmouseover=function(){
                	  now=this.tag;
                	  tab();          	
                  }
                  /*登录弹出层*/
                  var link=document.getElementById("login-li")
                  link.onclick=function(){
                  		openNew();                  		
                  		return false;
                  }
                  /*换肤*/
                  var hit=true;
                  var skin=document.getElementById('skin');
                  skin.onclick=function(){
                  	changeSkin();
                  	return false;
                  }
              }
              /*换肤*/
               function changeSkin(){
              	var link=document.getElementsByTagName("link")[0];
              	if(hit==true){
              		link.href="style.css";
              		hit = !hit;
              	}else{
              		link.href="skin.css";
              	    hit = !hit;
              	    return false;
              	}
              }
              /*登录弹窗*/
              function openNew(){
              	var pageWidth=document.documentElement.scrollWidth;
              	var pageHeight=document.documentElement.scrollHeight;
              	var omask=document.createElement('div');
              	omask.id='mask';
              	omask.style.height=pageHeight+'px';
              	omask.style.width=pageWidth+'px';
              	document.body.appendChild(omask);
              	var login=document.getElementById('login');
              	login.style.display='block';
              	var curHeight=document.documentElement.clientHeight;
              	var curWidth=document.documentElement.clientWidth;
              	var offHeight=login.offsetHeight;
              	var offWidth=login.offsetWidth;
              	login.style.left=(curWidth-offWidth)/2+'px';
              	login.style.top=(curHeight-offHeight)/2+'px';
              	var closeBtn=document.getElementById('login-close');
                var login=document.getElementById('login');
                omask.onclick=closeBtn.onclick=function(){
                 	document.body.removeChild(omask);                 	
                 	login.style.display='none';

              }
              var warn=document.getElementById("warn");
              var warn_txt=document.getElementById("warn_txt");
              warn.onmouseover=function(){
              warn_txt.style.display="block";
              }
              warn.onmouseout=function(){
              	warn_txt.style.display="none";
              }
          }
              /*图片轮播切换*/
              function tab(){
		     	for(var i=0;i<lis.length;i++){
		     		      lis[i].className='';
		     	      }
		     	      lis[now].className='now';
		     	     move(play,{"left":-(1200*now)});
                	}
              function	next(){
              	now++;
              	if(now==lis.length){
              		now=0;
              	}
              	tab();
              }
              var timer=setInterval(next,4000);
              play.onmouseover=function(){
              	clearInterval(timer);
              };
              play.onmouseout=function(){
              	timer=setInterval(next,4000);
              };
		     }