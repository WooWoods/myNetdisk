import hashlib
from Crypto.Cipher import DES, DES3
from Crypto.Util.Padding import pad, unpad

def hash_salt(data, salt):
    sha1 = hashlib.sha1()
    new_data = data + salt
    sha1.update(data.encode('utf-8'))
    sha1_data = sha1.hexdigest()
    return sha1_data
 
 
class SymEncrypt(object):
    @staticmethod
    def get_des_encrypt(data, key):
        """
        返回DES加密后的数据信息;
        :param data: str; 被加密的明文信息;
        :param key: bytes; 密钥信息,长度通常是8位;
        :return: bytes; 返回加密后的字节数据;
        """
        iv = b"01234567"
        des = DES.new(key=key, mode=DES.MODE_CBC, IV=iv)
        data = pad(data.encode(), 8)
        result = des.encrypt(data)
        return result
 
    @staticmethod
    def get_des_decrypt(data, key):
        """
        返回DES解密后的数据信息;
        :param data: str; 被加密的密文信息;
        :param key: bytes; 密钥信息,长度通常是8位;
        :param iv: bytes; 当模式是 ECB 的时候默认是None,DES中常用的长度是8;
        :return: bytes; 返回加密后的字节数据;
        """
        iv = b"01234567"
        des = DES.new(key=key, mode=DES.MODE_CBC, IV=iv)
        data = des.decrypt(data)
        # 先解密后去除填充;
        print(data)
        result = unpad(data, 8)
        return result


if __name__ == '__main__':
    import uuid
    uid = str(uuid.uuid4())
    
    #uid = 'wzmzWxgq8+i4n8iWonPRD3QpA534PnxtligZOH4TFqxw627wN1mePQ=='
    #v = SymEncrypt.get_des_encrypt("昨天吃多了", "abcdefgh".encode())
    v = SymEncrypt.get_des_encrypt(uid[0:8], "abcdefgh".encode())
    print(v)  # 加密
    import base64
 
    v = base64.b64encode(v)  # 进行 base64编码
    print(v.decode())  # bas64 可以编译成 字符串的形式
    # 进行base64解码
    sv = base64.b64decode(v.decode())
    #sv = base64.b64decode(uid)
    print(f'sv = {sv}')
    ssv = SymEncrypt.get_des_decrypt(sv, key="abcdefgh".encode())
    print(ssv)  # 解密完成
    print(ssv.decode()) 
