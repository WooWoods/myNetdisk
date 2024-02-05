import os
import re
import json
import base64
import tornado
from uuid import uuid4
import urllib.parse

from tornado.options import options
from tornado.escape import xhtml_escape

from .BaseManager import BaseHandler
from libs import utils
from libs.encrypt import SymEncrypt
from libs.auth import authenticated


class IndexHandler(BaseHandler):
    @authenticated
    def get(self):
        # check valid user or valid token

        user_path = self.root_dir
        current_path = self.get_argument('path', None)
        if current_path is not None:
            current_path = re.sub(r'^/+', '', current_path)
        print(current_path)

        try:
            path_await = os.path.join(user_path, current_path)
        except TypeError:
            path_await = user_path

        root, dirs, files = '', [], []
        root, dirs, files = next(os.walk(path_await))

        items = []
        for f in files:
            tmp_data = dict()
            file_stat = os.stat(os.path.join(path_await, f))
            
            try:
                file_path = os.path.join(current_path, f)
            except TypeError:
                file_path = f
            tmp_data['path'] = file_path
            tmp_data['itemname'] = f
            tmp_data['mtime'] = utils.time_readable(file_stat.st_mtime)
            tmp_data['size'] = utils.size_readable(file_stat.st_size)
            tmp_data['type'] = 'file'

            items.append(tmp_data)

        for d in dirs:
            tmp_data = dict()
            dir_stat = os.stat(os.path.join(path_await, d))

            try:
                dir_path = os.path.join(current_path, d)
            except TypeError:
                dir_path = d
            tmp_data['path'] = dir_path
            tmp_data['itemname'] = d
            tmp_data['mtime'] = utils.time_readable(dir_stat.st_mtime)
            tmp_data['size'] = '-'
            tmp_data['type'] = 'dir'

            items.append(tmp_data)

        res_data = {
                'code': 0,
                'msg': '',
                'data': items
                }

        self.write(res_data)


class ShareHandler(BaseHandler):
    def get(self):
        token = self.get_argument('token')
        token = re.sub(r'\s', '+', token)
        print('token', token)
        try:
            token_str = base64.b64decode(token)
            token_decode = SymEncrypt.get_des_decrypt(token_str, self.private_key.encode())
            uid = token_decode.decode()
        except Exception:
            self.set_status(403)
            res = {
                'msg': 'invalid token'
                }
            self.finish(res)
            return 

        _cursor = self._db.cursor()
        sqlite_text = f"SELECT * FROM tokens WHERE token = '{uid}'"
        _cursor.execute(sqlite_text)
        records = _cursor.fetchone()

        #if token not in ['vljTSB60Xa1Vm4GId14pTg==', 'TJxO3CjnTiad41OSokxRaw==']:
        #    if int(records[2]) > int(records[3]):
        #        self.set_status(401)
        #        res = {
        #            'msg': 'invalid token'
        #            }
        #        self.finish(res)
        #        return 
    
        user_path = self.root_dir
        current_path = records[1]
        if current_path.startswith('/'):
            current_path = current_path[1:]

        items = []
        path_await = os.path.join(user_path, current_path)
        print('joined', path_await)
        
        if os.path.isfile(path_await):
            tmp_data = dict()
            file_stat = os.stat(path_await)
            
            tmp_data['path'] = current_path
            tmp_data['itemname'] = current_path
            tmp_data['mtime'] = utils.time_readable(file_stat.st_mtime)
            tmp_data['size'] = utils.size_readable(file_stat.st_size)
            tmp_data['type'] = 'file'

            items.append(tmp_data)
        else:
            root, dirs, files = '', [], []
            root, dirs, files = next(os.walk(path_await))

            items = []
            for f in files:
                tmp_data = dict()
                file_stat = os.stat(os.path.join(path_await, f))
                
                try:
                    file_path = os.path.join(current_path, f)
                except TypeError:
                    file_path = f
                tmp_data['path'] = file_path
                tmp_data['itemname'] = f
                tmp_data['mtime'] = utils.time_readable(file_stat.st_mtime)
                tmp_data['size'] = utils.size_readable(file_stat.st_size)
                tmp_data['type'] = 'file'

                items.append(tmp_data)

            for d in dirs:
                tmp_data = dict()
                dir_stat = os.stat(os.path.join(path_await, d))

                try:
                    dir_path = os.path.join(current_path, d)
                except TypeError:
                    dir_path = d
                tmp_data['path'] = dir_path
                tmp_data['itemname'] = d
                tmp_data['mtime'] = utils.time_readable(dir_stat.st_mtime)
                tmp_data['size'] = '-'
                tmp_data['type'] = 'dir'

                items.append(tmp_data)

        res_data = {
                'code': 0,
                'msg': '',
                'data': items
                }

        self.write(res_data)

    @authenticated
    def post(self):
        json_data = self.request.body
        json_args = json.loads(json_data)
        print(json_args)

        target = json_args.get('target')

        uid = str(uuid4())[0:8]
        token_encode = SymEncrypt.get_des_encrypt(uid, self.private_key.encode())
        token_encode_b64 = base64.b64encode(token_encode)

        date = utils.current_date()
        target = re.sub(r'//', '/', target)

        # calculate the maximum permitted download times
        user_path = self.root_dir
        current_path = target
        if current_path.startswith('/'):
            current_path = current_path[1:]

        total_f = 0
        path_await = os.path.join(user_path, current_path)

        max_down = 3
        if os.path.isfile(path_await):
            max_down = 3
        else:
            for path, cdir, files in os.walk(path_await):
                for f in files:
                    total_f += 1
            down_time = total_f * 3
            max_down = max(3, down_time)

        data_to_db = [(uid, target, 0, max_down, 30, date)]

        _cursor = self._db.cursor()
        _cursor.executemany('INSERT INTO tokens VALUES (?, ?, ?, ?, ?, ?)', data_to_db)
        self._db.commit()

        res = {'token': token_encode_b64.decode()}
        self.write(res)

class ConfirmHandler(BaseHandler):
    def post(self):
        token = self.get_argument('token')
        valid_days = self.get_argument('valid_days')

        token_str = base64.b64decode(token)
        token_decode = SymEncrypt.get_des_decrypt(token_str, self.private_key.encode())
        uid = token_decode.decode()

        _cursor = self._db.cursor()
        sqlite_text = f"UPDATE tokens SET expires = {valid_days} WHERE token = '{uid}'"
        _cursor.execute(sqlite_text)
        self._db.commit()
        self.write('ok')


class GuestHandler(BaseHandler):
    def get(self):
        token = self.get_argument('token')
        token_str = base64.b64decode(token)
        token_decode = SymEncrypt.get_des_decrypt(token_str, self.private_key.encode())
        uid = token_decode.decode()

        sql_text = "SELECT * FROM tokens WHERE token = '{uid}'"
        _cursor = self._db.cursor()
        _cursor.execute(sql_text)
        records = cur.fetchall()

        if not records:
            self.write('invalid')
            return None



class DownloadHandler(BaseHandler):
    async def get(self):
        filename = self.get_argument('filename')
        print(filename)

        token = self.get_argument('token')
        token = re.sub(r'\s', '+', token)
        token_str = base64.b64decode(token)
        token_decode = SymEncrypt.get_des_decrypt(token_str, self.private_key.encode())
        uid = token_decode.decode()
        print('uid', uid)

        _cursor = self._db.cursor()
        sqlite_text = f"SELECT * FROM tokens WHERE token = '{uid}'"
        _cursor.execute(sqlite_text)
        records = _cursor.fetchone()
        print(records)

        download_times = int(records[2])
        #if token not in ['vljTSB60Xa1Vm4GId14pTg==', 'TJxO3CjnTiad41OSokxRaw==']:
        #    if download_times > int(records[3]):
        #        self.set_status(401)
        #        res = {
        #            'msg': 'invalid token'
        #            }
        #        self.finish(res)
        #        return
    
        valid_days = download_times + 1
        sqlite_text = f"UPDATE tokens SET downloads = {valid_days} WHERE token = '{uid}'"
        _cursor.execute(sqlite_text)
        self._db.commit()

        user_path = self.root_dir
        self.set_header('Content-Type', 'application/octet-stream')
        self.set_header('Content-Disposition', 'attachment; filename='+filename)

        file_path = os.path.join(user_path, records[1].lstrip('/'))
        print('file path=========', file_path)

        if os.path.isdir(file_path):
            file_path = os.path.join(file_path, filename)

        self.set_status(200)
        print('file path=========', file_path)
        with open(file_path, 'rb') as fh:
            while True:
                data = fh.read(60 * 1024)
                if not data:
                    break
                self.write(data)
                await self.flush()

        self.finish()



class UploadHandler(BaseHandler):
    # @authenticated
    def post(self):
        upload_path=os.path.join(os.path.dirname(__file__),'files')
        file_metas=self.request.files['file']

        for meta in file_metas:
            filename=meta['filename']
            filepath=os.path.join(upload_path,filename)

            with open(filepath,'wb') as fh:
                up.write(meta['body'])

