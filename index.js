const apiKey='372fb41b6012377b1e4eb38b54297a0b';

const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".searchInput");

const searchButton=document.querySelector(".searchButton");

async function checkWeather(city) {
    const response = await fetch(
        `${apiUrl} + ${city},NG&appid=${apiKey}`);
    var data = await response .json();

    if (!response.ok) {
    alert("City not found");
    return;
}
    
    document.querySelector(".temp").innerHTML=data.main .temp + "°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity-percent").innerHTML=data.main .humidity + "%"
    document.querySelector(".wind-percent").innerHTML= data.wind.speed + "km/h"


    console.log(data);
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})