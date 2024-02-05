import os
import tornado
import json
from uuid import uuid4

from tornado.options import options
from tornado.escape import xhtml_escape

from .BaseManager import BaseHandler
from libs.encrypt import hash_salt
from libs.auth import encode_auth_token, authenticated


class LoginHandler(BaseHandler):
    def post(self):
        json_data = self.request.body
        json_args = json.loads(json_data)
        username = json_args.get('username')
        passwd = json_args.get('password')
        print(username, passwd)

        sql_text = f"SELECT * FROM users WHERE username = '{username}'"
        _cursor = self._db.cursor()
        _cursor.execute(sql_text)
        records = _cursor.fetchone()

        if not records:
            self.set_status(403)
            res = {
                'msg': '用户名或密码错误'
                }
            self.finish()
            return

        passwd_sha1 = hash_salt(passwd, self.private_key)
        if passwd_sha1 != records[2]:
            self.set_status(403)
            res = {
                'msg': '用户名或密码错误'
                }
            self.finish()
            return

        user_info = {
            'id': records[0],
            'username': username,
            'is_admin': True
            }

        #self.set_secure_cookie('username', username)
        jwt=encode_auth_token(user_info['id'],user_info['username'],user_info['is_admin'], self.private_key)

        res = {
            'token': jwt,
            'user': user_info,
            'msg': '登录成功'
            }

        self.write(res)



class NewUserHandler(BaseHandler):
    def post(self):
        username = self.get_argument('username')
        passwd = self.get_argument('password')
        is_admin = self.get_argument('is_admin')
        if is_admin:
            admin = 'true'
        else:
            admin = 'false'

        _cursor = self._db.cursor()
        passwd_sha1 = hash_salt(passwd, self.private_key)

        uid = str(uuid4())
        data_to_db = [(uid, username, passwd_sha1, admin)]
        _cursor.executemany('INSERT INTO users VALUES (?, ?, ?, ?)', data_to_db)
        self._db.commit()

        self.finish('ok')




            


