import json
from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import *
# Create your views here.
# 主页
def index_views(request):
    return render(request, 'index.html')

# 注册
def register_views(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    else:
        dic = {
            "uname": request.POST['uname'],
            "upwd": request.POST['upwd'],
            "uphone": request.POST['uphone'],
        }
        # 将数据插入进数据库 - 注册
        Users(**dic).save()
        # 根据uphone的值再查询数据库
        u = Users.objects.get(uname=request.POST['uname'])
        # 将用户id和uphone保存进session
        request.session['uid'] = u.id
        request.session['uname'] = u.uphone

        return render(request, 'index.html')

# 登录跳转界面
def login_views(request):
    return render(request, 'login.html')

# 登录界面登录按钮进行登录提交操作
def login_btn_login_views(request):
    uname = request.POST['uname']
    upwd = request.POST['upwd']
    uList = Users.objects.filter(uname=uname, upwd=upwd)
    if uList:
        uid = uList[0].id
        request.session['uid'] = uid
        request.session['uname'] = uname
        return HttpResponse("ok")
    return HttpResponse("not")

# 检查用户是否登录，如果有的话则取出uname的值
def check_login_views(request):
    if 'uid' in request.session and 'uname' in request.session:
        uid = request.session['uid']
        user = Users.objects.get(id=uid)
        dic = {
            'status': '1',
            'user': json.dumps(user.to_dict())
        }
        return HttpResponse(json.dumps(dic))
    else:
        dic = {
            'status': '0',
        }
        return HttpResponse(json.dumps(dic))

# 购物车按钮跳转，以及对登录状态的监测
def cart_views(request):
    if 'uid' in request.session and 'uname' in request.session:
        pass
    else:
        return render(request, 'cart-nologin.html')