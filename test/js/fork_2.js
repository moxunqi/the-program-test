window.onload=function()
			{
				var odiv=document.getElementById("fork_2_id1");
				var obu=odiv.getElementsByTagName("input")[0];
				var ospa=odiv.getElementsByTagName("span")[0];
				obu.focus();
				obu.onfcus=function()
				{
					if(this.value=="请输入电话号码")this.value="";
					else if(this.vlaue=="")this.value="请输入电话号码";
				}
				var obu2=odiv.getElementsByTagName("input")[1];
				obu2.onclick=function()
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