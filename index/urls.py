from django.urls import path
from .views import *

urlpatterns = [
    # 主页
    path('index/', index_views),
    # 注册
    path('register/', register_views),
    # 登录
    path('login/', login_views),
    # 登录按钮
    path('login_btn_login/', login_btn_login_views),
    # 登录状态监测
    path('check_login/',check_login_views),
    # 购物车
    path('cart/',cart_views),
]
