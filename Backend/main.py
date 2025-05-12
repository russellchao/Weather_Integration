from weather_api_key import api_key
import requests
import json



def get_weather(location):

    response = requests.get(f"http://api.weatherapi.com/v1/current.json?key={api_key}&q={location}")

    if response.status_code == 200:
        weather_data = response.json()
        return weather_data  # You can customize this response format
    else:
        return {"error": "Unable to fetch weather data. Make sure your location is valid.\n"}, response.status_code



if __name__ == "__main__": 

    while True:
        location = input("Enter your city, zip, or postcode: ")
        
        weather_data = get_weather(location)
        # print(weather_data)
        
        city = weather_data['location']['name']
        region = weather_data['location']['region']
        country = weather_data['location']['country']
        condition = weather_data['current']['condition']['text']

        print(f"Location: {city}, {region}, {country}")
        print(f"Weather conditions: {condition}\n")