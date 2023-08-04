
const key = "ffb03b6a85841db25936fcaf4e3b7e55";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searches = document.querySelector(".search input")
const search = document.querySelector(".search button")

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${key}`);
    var info = await response.json();
    console.log(info);

    document.querySelector(".city").innerHTML = info.name;
    document.querySelector(".temps").innerHTML = Math.round(info.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = info.main.humidity + "%";
    document.querySelector(".wind").innerHTML = info.wind.speed + "km/h";
}

search.addEventListener("click", () =>{
checkWeather(searches.value);
});