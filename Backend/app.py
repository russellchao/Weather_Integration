from weather_api_key import api_key
from flask import Flask


app = Flask(__name__)


@app.route("/")
def hello_world(): 
    return "<p>Hello world</p>"


@app.route("/weather/<location>")
def get_location(): 
    return "<p>Get location</p>"



