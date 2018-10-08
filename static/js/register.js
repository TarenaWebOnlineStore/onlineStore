/**
 * Created by tarena on 18-9-21.
 */

/**
 * 功能：检查用户名是否符合规范
 * 规范：
 *  1.必须是８位以上,由英文开头,可以包含英文大小写,数字以及_ .
 * 返回值：
 *  true：通过验证
 *  false：未通过验证
 * */
window.verifyCode;
function checkUname(){
    var uname = $("#uname").val();
    var partn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){7,19}$/;
    if(uname.length >= 8 && partn.exec(uname)){
        $("#err_uname").html("");
        return true;
    }
    if(uname.length < 8){
        $("#err_uname").html("用户名需要8位以上");
        return false;
    }
    if(!patrn.exec(uname)){
        $("#err_uname").html("用户名只能输入8-20个以字母开头、可带数字 _ .");
        return false;
    }
}

/**
 * 功能：检查密码是否符合规范
 * 规范：
 *  1.只能输入6-20个字母、数字、下划线
 * 返回值：
 *  true：通过验证
 *  false：未通过验证
//  * */
function checkUpwd(){
    var upwd = $("[name='upwd']").val();
    var partn = /^(\w){6,20}$/;
    if(partn.exec(upwd)){
        $("#err_upwd").html("");
        return true;
    }
    if(!partn.exec(upwd)){
        $("#err_upwd").html("密码只能输入6-20个字母、数字、下划线");
        return false;
    }
}

/**
 * 功能：检查重复密码是否符合规范
 * 规范：
 * 1.必须与密码输入格式相同
 * 返回值：
 *  true：通过验证
 *  false：未通过验证
//  * */
function checkUpwds(){
    var upwd = $("[name='upwd']").val();
    var upwds = $("[name='upwds']").val();

    if(upwd == upwds){
        $("#err_upwds").html("");
        return true;
    }
    if(upwd != upwds){
        $("#err_upwds").html("两次密码输入不一致");
        return false;
    }
}

/**
 * 功能：检查手机号是否符合规范
 * 规范：
 * 1.必须以数字开头，除数字外，可含有 -
 * 返回值：
 *  true：通过验证
 *  false：未通过验证
//  * */
function checkUphone(){
    var uphone = $("[name='uphone']").val();
    var partn = /^1[3|4|5|8][0-9]\d{8}$/;
    if(partn.exec(uphone)){
        $("#err_uphone").html("");
        return true;
    }
    if(!partn.exec(uphone)){
        $("#err_uphone").html("手机号码格式不正确");
        return false;
    }
}

/**
 * 功能：检查单选框是否勾选
 * 规范：
 * 1.单选框需要勾选
 * 返回值：
 *  true：通过验证
 *  false：未通过验证
//  * */
function check_box(){
    if($('#treaty-btn').is(':checked')) {
        return true;
    }
    alert("请阅读并同意用户协议")
    return false;
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
            alert("验证码错误");
            return false;
        }
}

/**
 * 功能：点击注册按钮事件
 * 规范：
 * 1.判断各输入是否符合规范
 * 返回值：
 *  true：注册成功，进入主页
 *  false：未通过验证
//  * */
function check_register(){
    return checkUname() && checkUpwd() && checkUpwds() && checkUphone() && check_box() &&check_img();
}

$(function(){
    /**为 name=uname 的元素绑定 blur 事件*/
    $("[name='uname']").blur(function(){
        checkUname();
    });

    /**为 name=upwd 的元素绑定 blur 事件*/
    $("[name='upwd']").blur(function(){
        checkUpwd();
    });

    /**为 name=upwds 的元素绑定 blur 事件*/
    $("[name='upwds']").blur(function(){
        checkUpwds();
    });

    /**为 name=uphone 的元素绑定 blur 事件*/
    $("[name='uphone']").blur(function(){

        checkUphone();

    })
    window.verifyCode = new GVerify("v_container");
});

