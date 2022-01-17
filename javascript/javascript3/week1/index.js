console.log("hello")

fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2')
    .then(response => {
        //console.log("response", response)
        console.log("json function", response.body)
        return response.json();
    })
    .then(data => {
        console.log(data)
    });
    
   //the response of this API is an array of 2 objects

fetch('https://api.jikan.moe/v3')
    .then(response => {
        //console.log("response", response)
        console.log("json function", response.body)
        return response.json();
    })
    
    .then(data => {
        console.log(data)

    });
  //the response of this API is an  object
fetch('https://aws.random.cat/meow')
    .then(response => {
        //console.log("response", response)
        console.log("json function", response.body)
        return response.json();
    })
    
    .then(data => {
        console.log(data)

    });
//the response of this API is an  object

////Weather app
fetch('https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=6272c3feab957059c01647a206efdbcd')
    .then(response => {
        //console.log("response", response)
        console.log("json function", response.body)
        return response.json();
    })
    
    .then(data => {
        console.log(data)

    });

//Fetch weather data from a city
const getWeatherInfo = (cityName) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6272c3feab957059c01647a206efdbcd`)
        .then(response => {
            let result = response.json();
            console.log(result)
            return result;
        })
}
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("button").addEventListener("click", () => {
        let city = document.getElementById("city-name").value;
        let weatherInfoPromise = getWeatherInfo(city);
        weatherInfoPromise.then(weatherInfo => {
            let nameOfCity = document.getElementById("name");
            nameOfCity.textContent = weatherInfo.name;
            let temp = document.getElementById("temprature")
            temp.textContent = weatherInfo.main.temp;
            let icon = document.getElementById("icon-type");
            icon.textContent = weatherInfo.weather[0].icon;
            let wind = document.getElementById("wind-speed");
            wind.textContent = weatherInfo.wind.speed;
            let description = document.getElementById("decription");
            description.textContent = weatherInfo.weather[0].description;
            let sunrise = document.getElementById("sunrise");
            sunrise.textContent =  weatherInfo.sys.sunrise;
            let sunset = document.getElementById("sunset");
            sunset.textContent =  weatherInfo.sys.sunset;
        })
      
    })
});


    