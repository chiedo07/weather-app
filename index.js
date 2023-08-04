
const key = "ffb03b6a85841db25936fcaf4e3b7e55";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searches = document.querySelector(".search input");
const search = document.querySelector(".search button");
const imageicon = document.querySelector(".wth")

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${key}`);
    var info = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".error").style.display = "none";
    }
    console.log(info);

    document.querySelector(".city").innerHTML = info.name;
    document.querySelector(".temps").innerHTML = Math.round(info.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = info.main.humidity + "%";
    document.querySelector(".wind").innerHTML = info.wind.speed;

    if(info.weather[0].main == "Clouds"){
     imageicon.src = "images/clouds.png"
    }
    else if(info.weather[0].main == "Rain"){
        imageicon.src = "images/rain.png";
       }
    else if(info.weather[0].main == "Clear"){
        imageicon.src = "images/clear.png";
       }
       else if(info.weather[0].main == "Drizzle"){
        imageicon.src = "images/drizzle.png";
       }
       else if(info.weather[0].main == "Snow"){
        imageicon.src = "images/snow.png";
       }
       else if(info.weather[0].main == "Wind"){
        imageicon.src = "images/wind.png";
       }
       else if(info.weather[0].main == "Mist"){
        imageicon.src = "images/mist.png";
       }
}

search.addEventListener("click", () =>{
checkWeather(searches.value);
});