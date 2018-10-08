/**
 * 功能：登录按钮
 * 规范：
 * 1.登录按钮的判断
 * 返回值：
 *  true：通过验证
 *  false：未通过验证
//  * */
function btn_login(){
    //1.创建　xhr
    var xhr = createXhr();
    //2.创建请求
    xhr.open('post','/login_btn_login/',true);
    //3.设置回调函数
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            //xhr.responseText
            if(xhr.responseText == 'ok'){
                if(!check_img()){
                   $('#err-div').html("<p style='color: red;font-size: 20px'>您的验证码有误</p>")
                }
                if(check_img()) {
                    window.open("http://localhost:8000/index/")
                }
            }
            if(xhr.responseText == 'not'){
                $('#err-div').html("<p style='color: red;font-size: 20px'>您的账号或者密码错误</p>")
            }
        }
    }
    //4.设置请求消息头
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    //5.发送请求
    var uname=$("#uname").val();
    var upwd=$("#password").val();
    var csrf=$("[name=csrfmiddlewaretoken]").val();
    var params="uname="+uname+"&upwd="+upwd+"&csrfmiddlewaretoken="+csrf;
    xhr.send(params);
}

/**
 * 功能：验证码
 * 规范：
 * 1.单选框需要勾选
 * 返回值：
 *  true：通过验证
 *  false：未通过验证
//  * */
function check_img(){
    var res = window.verifyCode.validate(document.getElementById("authcode").value);
        if(res){
            return true;
        }else{
            return false;
        }
}

$(function(){
    //生成验证码图片
    window.verifyCode = new GVerify("v_container");
});
