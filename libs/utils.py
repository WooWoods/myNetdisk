import os
import sys
from datetime import datetime

def time_readable(timestamp):
    return datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')

def current_date():
    format_ = '%Y-%m-%d'
    date = datetime.now()
    string = date.strftime(format_)
    return string

def size_readable(size):
    Byte = 1
    KB = 1024 * Byte
    MB = 1024 * KB
    GB = 1024 * MB

    if size < MB:
        num = round(size/KB, 2)
        unit = 'KB'

    elif size > MB and size < 1000*MB:
        num = round(size/MB, 2)
        unit = 'MB'

    else:
        num = round(size/GB, 2)
        unit = 'GB'

    return str(num) + unit






