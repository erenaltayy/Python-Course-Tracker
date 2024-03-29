from flask import Flask

app = Flask(__name__, instance_relative_config=True)

app.static_folder = 'static'

from app import views

app.config.from_object("config")

