function isValidEmail(id,msg){
var obj=eval("document.all[\""+id+"\"]");
//通过传递的参数定义对象
var url=obj.value; 
//获取用户输入的电子邮件地址
var reg1 = new RegExp('^[a-zA-Z0-9][a-zA-Z0-9@._-]{3,}[a-zA-Z]$');
var reg2 = new RegExp('[@.]{2}');
//定义电子邮件的正则表达式规则
	if (url.search(reg1) == -1|| url.indexOf('@') == -1|| url.lastIndexOf('.')<url.lastIndexOf('@')||url.lastIndexOf('@') != url.indexOf('@')|| url.search(reg2) != -1){
	alert(msg);
	obj.select();
	return false;
	//如果对象内容不符合电子邮件地址标准系统提示出错信息，并自动聚焦到该对象，验证失败，函数返回false
	}else{
	return true;
	}
}
function checkEmpty(id,msg){
var obj=eval("document.all[\""+id+"\"]");
//通过传递的参数定义对象
	if(obj.value==""||obj.value==undefined){
	alert(msg);
	obj.select();
	return false;
	//如果对象内容为空系统提示出错信息，并自动聚焦到该对象，验证失败，函数返回false
		}else{
		return true;
		//否则通过验证，函数返回true
	}
}
function checkLen(id,minLen,msg){
var obj=eval("document.all[\""+id+"\"]");
//通过传递的参数定义对象
	if(obj.value.length<minLen){
	alert(msg);
	obj.select();
	return false;
	//进行判断，如果对象内容长度小于最小限制提示出错信息，并自动聚焦到该对象，验证失败，函数返回false
		}else{
		return true;
		//否则通过验证，函数返回true
	}
}
function checkPswd(){
	var newPswdObj=document.all["newPswd"];
	//定义新口令输入框对象
	var rePswdObj=document.all["rePswd"];
	//定义确认口令输入框对象
	if(newPswdObj.value==""||newPswdObj.value==undefined||newPswdObj.value.length<4){
	alert("会员资料填写不正确，会员登入口令不能为空或者长度不符合要求！");
	newPswdObj.select();
	return false;
	//进行判断，如果会员登入口令为空或者长度不符合要求提示出错信息，并自动聚焦到该对象，验证失败，函数返回false
		}else{
		if(rePswdObj.value!=newPswdObj.value){
		alert("会员资料填写不正确，输入的确认口令与新口令不一致！");
		rePswdObj.select();
		return false;
		//进行判断，如果会员输入的确认口令与新口令不一致提示出错信息，并自动聚焦到该对象，验证失败，函数返回false
			}else{
			return true;
			//否则通过验证，函数返回true
		}
	}
}
function checkFond(){
var strFond="";
var obj;
var totalFondType=5;
//定义变量用来存放个人爱好中复选框的最大个数为5
	for(var i=1;i<=totalFondType;i++){
		obj=eval("document.all[\"fond"+i+"\"]");
		//通过循环依次获取这些复选框对象
		if(obj.checked==true){
			if(strFond==""){
			strFond=obj.value;
			}else{
			strFond=strFond+","+obj.value;
			}
			//进行判断，如果被选中就把其值保存在变量strFond中
		}
	}
	if(strFond==""){
	alert("会员资料填写不完整，至少要选择一种个人爱好！");
	return false;
	//如果未进行任何个人爱好的选择提示出错信息，验证失败，函数返回false
	}else{
	document.all["fond"].value=strFond;
	return true;
	//否则通过验证并把所选择的所有个人爱好信息存放在fond文本框中
	}
}
function selectTxt(obj){
obj.select();
//依据传递的参数获取聚焦对象
}

function dataSubmit(){
	if(!checkEmpty("userName","会员资料填写不正确，用户帐号不能为空！")) return false;
	if(! checkLen("userName",4,"会员资料填写不正确，用户帐号长度受限制！")) return false;
	//调用函数验证用户帐号输入的有效性
	if(!isValidEmail("email","会员资料填写不正确，用户电子邮件无效！")) return false;
	if(!checkPswd()) return false;
	//调用函数验证用户口令输入的正确性
	if(!checkEmpty("realName","会员资料填写不正确，真实姓名不能为空！")) return false;
	//调用函数验证用户真实姓名输入的有效性
	if(!checkFond()) return false;
	//调用函数验证用户个人爱好输入的有效性
	frmData.submit();
	//全部验证通过提交表单
	window.location.href="us.html";
}
