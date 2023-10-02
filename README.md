# AJ-Weather-Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Website URL



## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option and a list of previously searched cities.](./image-ref/AJ%20Weather%20Dashboard%20View%201.png)

![The weather app includes a five-day forecast and current weather conditions for Hong Kong.](./image-ref/AJ%20Weather%20Dashboard%20View%202%20-%20post%20search.png)

## Installation

The HTML contributes the following:

-The structure and position of the elements on the webpage itself (headers, search box, sectioning for 'today's forecase' and '5-day forecast). The HTML also stores the links for jquery, bootstrap, css sheet, and the javascript file.

The CSS consists of the style choices on the page:

-The font size/colors/family, border styles, and color of the elements.

The Script contributes the following:

-The functionality of the search button, search history, as well as the code for the weather API calls, which produces the forecast of the searched city.

## Usage

![This image was used as a reference for the layout and overall function of the dashboard](./image-ref/06-server-side-apis-homework-demo.png)

## Credits

Erik (TA) assisted with setting up the search history.

Jehyun Jung (Calendy Tutor) advised on the cross origin/integrity fields for the bootstrap link.

Web Source : Reference for use grid above - https://getbootstrap.com/docs/4.1/layout/grid/ 

Web Source : Reference for fahrenheit symbol - https://stackoverflow.com/questions/3312001/degrees-symbol-as-in-degrees-celsius-fahrenheit-in-a-textview 

Web Source : Reference for Open Weather API guide for the Current Weather API call - https://openweathermap.org/current

Web Source : Reference for the fetch request for latitude/longitude - https://openweathermap.org/api/geocoding-api

Web Source : Reference for Open Weather API guide for the 5 day forecast - https://openweathermap.org/forecast5 



## License

MIT License

Copyright (c) 2023 aubreymlj96

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.