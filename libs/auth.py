import jwt
import datetime
"""
进行权限验证，encode_auth_token 生成token
decode_auth_token 根据 token 解析出数据
import base64
import uuid
print(base64.b64encode(uuid.uuid4().bytes + uuid.uuid4().bytes))
#hhLgDUloTO2hKpawAGathnZEwNDbDEAOrNZQLj1DAzk=
"""
# 自定义密钥，密钥的生成在上面注释的代码中
secret = "hhLgDUloTO2hKpawAGathnZEwNDbDEAOrNZQLj1DAzk="
# 对用户信息加密生成jwt
def encode_auth_token(user_id, username, is_admin, secret):
    try:
        # 这个就是jwt三个部分中的载荷部分
        # # 过期时间最后是和 UTC 作比较，所以设置的时候使用 datetime.datetime.utcnow()
        pyload={
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),  # 过期时间,我设7天过期
            'iat': datetime.datetime.utcnow(),  #  开始时间
            'data': {
                'id': user_id,
                'username': username,
                'is_admin': is_admin
            } # 内容，一般存放用户id
        }
        print(pyload)
        # 开始进行加密，返回字符串，可以看到传入例如密钥，指定了加密算法
        # encode 返回的是 bytes，需要 decode() 得到 str,不转换的话，在封装json的时候报错
        auth_token = jwt.encode(pyload, secret, algorithm='HS256')
    except Exception as e:
        auth_token = e
    return auth_token
 
# 从jwt中提取用户信息,进行验证
def decode_auth_token(auth_token, secret):
    # 如果需要关闭过期时间的验证，可以在 options 中使用 verify_exp
    # jwt.decode(auth_token, secret, issuer='wang', algorithms=['HS256'], options={'verify_exp': False})
    # 传入了密钥和算法，和加密是对应的，因此密钥一定不要泄露
    s = jwt.decode(auth_token, secret, algorithms=['HS256'])  # 解密，校验签名
    return s

def authenticated(method):
    def wrapper(self, *args, **kwargs):

        # ret_data = {}

        tsessionid = self.request.headers.get("Authorization", None)
        print(tsessionid)
        auth_token = bytes(tsessionid, encoding="utf8")
        if auth_token:

            try:
                payload = decode_auth_token(auth_token, self.private_key)
                print(payload)

                try:
                    user_id = payload['data']["id"]
                    print(user_id)
                    self._current_user = user_id
                    method(self, *args, **kwargs)
                except Exception as e:
                    print(e)
                    self.set_status(401)
            except jwt.ExpiredSignatureError as e:
                self.set_status(401)

    return wrapper
