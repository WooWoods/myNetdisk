import tornado
import sqlite3

import jwt
from tornado.options import options
from tornado.escape import xhtml_escape
from tornado.web import authenticated, RequestHandler
from libs.auth import decode_auth_token


class BaseHandler(RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        #self.set_header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With,X-CSRF-Token,AccessToken,Token")
        self.set_header("Access-Control-Allow-Headers", "*")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def initialize(self):
        self.private_key = self.settings['private_key']
        db_path = self.settings['db_path']
        self._db = sqlite3.connect(db_path)
        self.root_dir = self.settings['root_direct']
        # self.cursor = self._db.cursor()

    def get_current_user(self):
        #current_user = self.session.get('userID')  #获取加密的cookie
        #if current_user:
        #    return current_user
        #return None
        #return self.get_secure_cookie('username')
        pass

    def options(self):
        self.finish()
             
    """
    通过分析请求头部的Authorization中的数据 判断是否过期 
    并解析出用户的class_id username id
    """
    #def getHeaderData(self):
    #    try:
    #        auth_token = self.request.headers.get("Authorization")
    #        if not auth_token:
    #            # 权限拒绝，返回401
    #            self.set_status(401) #给请求者提示 权限拒绝
    #            self.write({"error":"权限拒绝！"})
    #            return
    #        # 传过来的是字符串 我们需要转换成字节，才能解密
    #        auth_token = bytes(auth_token, encoding="utf8") # 字符转字节
    #        # 对jwt解密
    #        auth_token = decode_auth_token(auth_token)
    #    # 权限过期会发生异常，我们捕获它
    #    except jwt.exceptions.ExpiredSignatureError as e:
    #    # 权限过期了
    #        self.set_status(403) #给请求者提示 资源不可用
    #        self.write({"error":"权限过期了！"})
    #        return
    #    return auth_token.get("data")


