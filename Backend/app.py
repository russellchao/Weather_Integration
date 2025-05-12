from flask import Flask



app = Flask(__name__)


@app.route("/")
def hello_world(): 
    return "<p>Hello world</p>"


@app.route("/weather/<location>")
def get_location(location): 

    response = requests.get(f"http://api.weatherapi.com/v1/current.json?key={api_key}&q={location}")

    if response.status_code == 200:
        weather_data = response.json
        print(weather_data)
    else:
        print("Error: unable to fetch weather data")

    # return "<p>Get location</p>"



