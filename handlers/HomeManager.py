import os
import tornado

from tornado.options import options
from tornado.escape import xhtml_escape

from .BaseManager import BaseHandler


class IndexHandler(BaseHandler):
    def get(self):
        items = ["Item 1", "Item 2", "Item 3"]
        # self.render("template.html", title="My title", items=items)
        self.write('Hello.')

