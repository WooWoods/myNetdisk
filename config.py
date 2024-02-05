import os


settings = dict(
    cookie_secret = "sOzGl/HxSTm1ZJtQ6KlHaRx6BhLTWksymG5fdLMqqb0=",
    xsrf_coockies = True,
    login_url = "/user/login",
    private_key = "dUA8_9]@",

    static_path = os.path.join(os.path.dirname(__file__), "static"),
    template_path = os.path.join(os.path.dirname(__file__), "templates"),
    db_path = os.path.join(os.path.dirname(__file__), "db/nas.db"),

    root_direct = '/public/netdisk',

    debug = False,

    #db = db_client['platform_test']
    )
