window.onload=function()
			{
				var odiv=document.getElementById("fork_3_id1");
			    var obu=odiv.getElementsByTagName("input")[0];
		  	    obu.focus();
		  	    obu.onfocus=function()
			    {
				    if(obu.value=="")obu.value="请输入电话号码";
				    else if(obu.value=="请输入电话号码")obu.value="";			
			    }
			    var xmlhttp=new XMLHttpRequest();
			    var obu1=odiv.getElementsByTagName("input")[1];
			    var ospa=odiv.getElementsByTagName("span")[0];
			    obu1.onclick=function()
			    {
			    	var x=new XMLHttpRequest();
					x.open("GET","test1.json?phonenumber="+obu.value,true);
					x.send();
					x.onreadystatechange=function()
					{
						if(x.status==200&&x.readyState==4)
						{
							ospa.innerHTML=x.responseText;
						}
					}
			    }
			}