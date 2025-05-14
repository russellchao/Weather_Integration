from flask import Flask
from flask_cors import CORS
from weatherAPI import get_weather

app = Flask(__name__)
CORS(app)


@app.route("/<location>")
def get_location(location): 

    weather_data = get_weather(location)

    if "location" in weather_data and "current" in weather_data: 
        city = weather_data['location']['name']
        region = weather_data['location']['region']
        country = weather_data['location']['country']

        full_location = f"{city}, {region}, {country}"
        condition = weather_data['current']['condition']['text']

        return [full_location, condition]
    
    return ["Error", "Error"], 404

    
   

if __name__ == "__main__":
    app.run(debug=True)

