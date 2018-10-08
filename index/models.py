from django.db import models

# Create your models here.
#用户实体
class Users(models.Model):
    #用户名
    uname = models.CharField(max_length=30)
    #密码
    upwd = models.CharField(max_length=30)
    #手机号
    uphone = models.CharField(max_length=11)
    #头像
    uimg = models.ImageField(upload_to='static/upload/users')
    #性别
    usex = models.CharField(max_length=6)
    #年龄
    uage = models.CharField(max_length=3)
    #邮箱
    uemail = models.CharField(max_length=20)
    #ＱＱ
    uqq = models.CharField(max_length=11)
    #积分
    uintegral = models.CharField(max_length=8)
    #余额
    money = models.DecimalField(max_digits=7, decimal_places=2, default=0.0)
    #激活状态
    isActive = models.BooleanField(default=True)

    def __str__(self):
        return self.uname

    def to_dict(self):
        dic = {
            "id": self.id,
            "uname": self.uname,
            "upwd": self.upwd,
            "uphone": self.uphone,
            "isActive": self.isActive
        }
        return dic
