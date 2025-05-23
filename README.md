# Weather_Integration

Weather API Integration App for PAP Portfolio. This is a simple React app that allows the user to enter their location by city, zip, etc. After the user submits, the React app will call the REST API, a Python Flask app. Upon calling the Flask app, it then calls the Weather API with the user's location, and returns a more detailed location using the format: City, State/Province/Region, Country, and then the current weather conditions of that location. 

As part of the project's specifications on the Onboarding Document, it called for changing the background based on the current weather conditions. However, I was having difficulty dynamically updating the background as the user continues to send requests. After countless hours of searching through documentation and asking AI, and no success, I decided to ditch the background changing feature completely. After all, I've decided what matters most about this project is my ability to develop an API that returns the current weather conditions based on the user's requested location. Trying to change the app's background is more of a frontend aspect. 

You can find a video demo in the files as shown.  You may have to click "View Raw" upon clicking the video file.
