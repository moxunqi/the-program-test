window.onload=function()
			{
				var odiv=document.getElementById("fork_1_id1");
				var oin=odiv.getElementsByTagName("input")[0];
				oin.focus();
				oin.onfocus=function()
				{
					if(oin.value=="请输入电话号码")oin.value="";
					else if(oin.value=="")oin.value="请输入电话号码";
				};
				var otextarea=document.getElementById("fork_1_id2");
				var obu1=odiv.getElementsByTagName("input")[1];
				var xmlhttp=new XMLHttpRequest();
			    obu1.onclick=function()
			    {
			    	var num=oin.value;
			    	var des=otextarea.value;
			    	des=encodeURIComponent(des);
			    	xmlhttp.open("POST","user.txt?phonenumber="+num,true);
			    	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			    	xmlhttp.send("phonenumber="+num+" "+"describe="+des);
			    }
			    xmlhttp.onreadystatechange=function()
			    {
			    	if(xmlhttp.readyState=4&&xmlhttp.status==200)
			    	{
			    		odiv.innerHTML=xmlhttp.responseText;
			    	}
			    }
			}