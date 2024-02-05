import os

import tornado.ioloop
import tornado.web
#from pymongo import MongoClient
from tornado.web import url
from tornado.httpserver import HTTPServer
from tornado.options import define, options

from handlers import HomeManager, FilesManager, UserManager


def myApp():
    from config import settings

    # Directory Contains All Users' Files
    server_base_dir = os.path.dirname(os.path.abspath(__file__))
    define("users_dir", default=os.path.join(server_base_dir, "users"))
    define("db_dir", default=os.path.join(server_base_dir, "database"))
    options.parse_command_line()

#    db_client = MongoClient(os.environ.get('MongoDB_URI') or 'mongodb://localhost:27017/')

    return tornado.web.Application(
        [
            # user handler
            (r"/sysapi/users/login", UserManager.LoginHandler),
            (r"/sysapi/users/new", UserManager.NewUserHandler),


            # File Manager
            (r"/sysapi/files/index", FilesManager.IndexHandler),
            (r"/sysapi/files/share", FilesManager.ShareHandler),
            (r"/sysapi/files/confirm", FilesManager.ConfirmHandler),
            (r"/sysapi/files/download", FilesManager.DownloadHandler),

            # Static File
            #(r"/(.*)$", tornado.web.StaticFileHandler, {"path": os.path.join(server_base_dir, 'static/html'), "default_filename": "index.html"})
        ],
        **settings
    )



if __name__ == "__main__":
    app = myApp()
    server = HTTPServer(app)
    server.bind(8888, "0.0.0.0")
    server.start()  # forks one process per cpu
    print("URL Address 0.0.0.0:8888")
    tornado.ioloop.IOLoop.current().start()

