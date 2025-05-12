from flask import Flask
from flask_cors import CORS
from main import get_weather

app = Flask(__name__)
CORS(app)


@app.route("/<location>")
def get_location(location): 

    weather_data = get_weather(location)
    condition = weather_data['current']['condition']['text']
    return condition

    
   

if __name__ == "__main__":
    app.run(debug=True)

