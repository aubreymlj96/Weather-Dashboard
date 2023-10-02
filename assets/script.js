$(document).ready(function(){
    $("#form-submit").submit(function(event){
        getApi(event);
        getFiveDaysApi(event);
    });
});

let cityPicked = "";
let citySearched = JSON.parse(localStorage.getItem('cities')) || [];

function getApi(){
    const requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityPicked + '&appid=8975142747d99cc3145ba3f9f2b188db'//'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=8975142747d99cc3145ba3f9f2b188db';

    fetch(requestUrl)
        .then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data);
            let latitude = data[0].lat;
            let longitude = data[0].lon;
            getCurrentWeather(latitude, longitude);
        })

}

var apiKey = '8975142747d99cc3145ba3f9f2b188db';

function getCurrentWeather(lat, lon){
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    
    
    fetch(weatherUrl)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        let resultDetails = $('<div>');
        let day = $('#fetch-elm').addClass('date-of');
        let date = new Date(data.dt * 1000);
        let dayOf = $('<h3>').addClass('actual-date').text(date);
        let expCity = $('<p>').addClass('exp-city').text('Current Weather for').append(cityPicked);
        let degree = $('<p>').addClass('temperature').text('Current Temperature =' + (data.main.temp) + '\u2109');
        let humid = $('<p>').addClass('humidity').text('Current Humidity =' + data.main.humidity + '%');
        let windSpeed = $('<p>').addClass('wind').text('Current Wind Speed = ' + Math.round(data.wind.speed) + 'mph');
        let icon = $(`<img>`).attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`).addClass("rounded d-block");     
        console.log(day, dayOf, expCity, degree, humid, windSpeed, icon);
        $('#fetch').append(resultDetails.append(day, dayOf, expCity, degree, humid, windSpeed, icon));
        getFiveDaysApi(lat, lon);
    })

    
}

var getFiveDays = [];

function getFiveDaysApi(lat, lon){
    const urlRequest = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    
    fetch(urlRequest)
        .then(function(response){
            return response.json();
        }).then(function(datas){
            for(i = 0; i < datas.list.length; i += 8){
                getFiveDays.push(datas.list[i]);
            }
            console.log(getFiveDays);
            for(i = 0; i < getFiveDays.length; i++) {
                let days = getFiveDays[i];
                let cardDiv = document.getElementById('#fetch-five');
                let card = $('<div>').addClass('col-sm-2 grid card min-vh-4');
                const daysOftheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                //reference for use grid above - https://getbootstrap.com/docs/4.1/layout/grid/ 
                let date2 = new Date(getFiveDays[i].dt_txt).getDay();
                console.log(date2);
                let dateOf = $('<h3>').addClass('actual-date').text(daysOftheWeek[date2]);
                let cardDay = $('<h2>').text(getFiveDays[i].dt_txt);
                let degree =  $('<p>').text('Current Temperature = ' + (getFiveDays[i].main.temp));
                //source for fahrenheit symbol - https://stackoverflow.com/questions/3312001/degrees-symbol-as-in-degrees-celsius-fahrenheit-in-a-textview 
                let humid = $('<p>').text('Current Humidity =' + getFiveDays[i].main.humidity + '%');
                let windSpeed = $('<p>').text('Current Wind Speed =' + Math.round(getFiveDays[i].wind.speed) + 'mph');
                let icon = $(`<img>`).attr('src', `https://openweathermap.org/img/wn/${getFiveDays[i].weather[0].icon}@2x.png`).addClass("rounded d-block");
                $('#fetch-five').append(card.append(days, dateOf, cardDay, degree, humid, windSpeed, icon));
                $('#five-days').append(cardDiv);
            }
          
        })
}

function searchHistory(){
    $('#searched').empty();
    for(i = 0; i < citySearched.length; i++){
        let past = $("<p class='cities'>");
        past.attr('data', citySearched[i]);
        past.text(citySearched[i]);
        $('#searched').append(past);
    }

}

$('#submitBtn').on('click', function(event){
    event.preventDefault();
    cityPicked = $('#city').val().trim();
    console.log(citySearched);
    getApi();

    if (citySearched.length > 4){
        citySearched.shift();
    }
    citySearched.push(cityPicked);
    localStorage.setItem('cities', JSON.stringify(citySearched));
    $('city').val('');
    getHistory();
});

function getHistory(){
    $('#city-list').empty();
    for(i = citySearched.length-1; i >= 0; i--){
        let button = $('<button>').addClass("btn btn-primary m-2 p-2 history-button");
        button.attr("id", citySearched[i]);
        button.text(citySearched[i]);
        $('#city-list').append(button);
    }
    $('.history-button').on('click', function(event){
        cityPicked = event.target.id;
        getApi();
    })
}

$(document).on('click', '.cities', function(){
    cityPicked = $(this).text();
    $(cityPicked).on('click', getApi)
    getApi();
    searchHistory();
    refreshPage();

});

$('#clear-history').on('click', function(event){
    event.preventDefault();
    console.log('test');
    localStorage.removeItem('cities');
    document.location.reload();
});

getHistory();

















































