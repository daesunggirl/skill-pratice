var calendar=document.getElementById("calendar");
var items=calendar.getElementsByClassName("month");
var len=items.length;
var schedule=calendar.getElementsByClassName("schedule")[0]
var arr=[
		   "大家一起开心的过年吧",
		   "这个月有谁生日呢",
		   "开学季准备好了吗，迎接新的一学期，新的成长我爱学习，学习使我快乐",
		   "学习专业知识，坚持运动",
		   "五月不减肥六月徒伤悲，你打算徒伤悲还是穷开心呢我爱学习，学习使我快乐我爱学习，学习使我快乐，我爱姜胜允，姜胜允使我快乐",
		   "又快放假了，总结一下这歌学期的目标有没有达成吧",
		   "找个暑假实习磨练自己，为以后的找工作s铺垫",
		   "珍惜和家人在一起的每一天",
		   "学习充电",
		   "去欢乐谷玩了回来没有？",
		   "学习前端相关的知识",
		   "准备考试"
	];
window.onload=function addText(){
	
	for(var i=0;i<len;i++){
		 items[i].index=i;
	   items[i].onmouseover=function(evt){
			var e=evt||window.event;
		    var target=e.target||e.srcElement;
			var text=target.innerHTML;
			text='<h2>'+text+"月计划事项"+'</h2>'+arr[this.index];
			schedule.innerHTML=text;
	}


  }
  for(var j=0;j<len;j++){
  	   items[j].onmouseout=function(){
  			schedule.innerHTML='';
  	}
  }
}

var fm=document.forms[0];
var lis=fm.getElementsByTagName('li');
var selectAll=fm.elements['all'];
var selectOp=fm.elements['opposite'];
var edit=fm.elements['edit'];
console.log(selectOp);
console.log(lis.length);
console.log(selectAll);
var checkboxs=fm.elements['check'];
var del=fm.elements['delete'];
var divs=fm.getElementsByTagName("div");
console.log(del);

 var Action={
 	selectall:function() {
		     for(var i=0;i<lis.length;i++){
		  	    checkboxs[i].checked=true;
           }
             Action.checkColor();
        },
     selectOp:function() {
     	      for(var i=0;i<checkboxs.length;i++){
     		    if(checkboxs[i].checked){
                   checkboxs[i].checked=false;
     		}
     		else{
     			  checkboxs[i].checked=true;
     		}
     	}
            Action.checkColor();
            console.log('1');
     },
     edit:function(){
     	     selectAll.style.display="inline";
			 selectOp.style.display="inline";
			 del.style.display="inline";
			 for(var i=0;i<checkboxs.length;i++){
				 checkboxs[i].style.display="block";
	        }
     },
     checkColor:function(){
     	for(var i=0;i<checkboxs.length;i++){
     		if(checkboxs[i].checked){
     			lis[i].style.backgroundColor="rgb(34,177,16)";
     		}else{
     			lis[i].style.backgroundColor="";
     		}
     	}
     },
     remove:function(){
     	var arr=[];  
     	for(var i=0;i<i<checkboxs.length;i++){
     		if(checkboxs[i].checked){
     			fm.removeChild(divs[i]);
     	       }
     	}
  
     }
    
  }

selectAll.onclick=Action.selectall;
selectOp.onclick=Action.selectOp;
edit.onclick=Action.edit;
del.onclick=Action.remove;