/**
 * Created by tarena on 18-9-26.
 */
/**
 * 功能：检查登录状态(AJAX)
 *  如果有登录信息的话，登录位置处显示 ： 欢迎 xxxx 退出
 *  如果没有登录信息的话，登录位置处显示：[登录][立即注册]
 * */
function check_login(){
    $.get('/check_login/',function(data){
        var html = "";
        if(data.status == '0'){
            //用户未处于登录状态
            html+="<a href='/login' title='登录' class='cl-6'>登录</a>";
            html+="<span class='pd-0005 cl-c'>|</span>";
            html+="<a href='/register' title='立即注册' class='cl-6 mr30'>立即注册</a>";
        }else if(data.status == '1'){
            //用户处于登录状态
            user = JSON.parse(data.user)
            html+="欢迎:"+user.uname+"&nbsp;&nbsp;";
            html+="<a href='/logout/'>退出</a>";
        }
        $("#lg_rg_js").html(html);
    },'json');
}

$(function(){
    //检查登录状态
    check_login()
});