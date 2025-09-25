//v
// tefan88290@bitfami.com
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=8b58d38cf84f6400036041c476fcd1ac
// function hello()
// {
//     console.log("Hello World");
    
// }
// hello()


const apikey = '8b58d38cf84f6400036041c476fcd1ac';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector(".searchbox input")
const searchBtn = document.querySelector(".search-btn")
const weatherImg = document.querySelector(".w-img")

async function callApi(city)
{
    const response = await fetch(apiurl+ city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".hum-per").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind-h").innerHTML= data.wind.speed + " km/hr";

    if (data.weather[0].main === "Clouds")
    {
        weatherImg.src="./images/clouds.png"
    }
    else  if (data.weather[0].main === "Clear")
    {
        weatherImg.src ="./images/clear.png"
    }
    else  if (data.weather[0].main === "Rain")
    {
        weatherImg.src ="./images/rain.png"
    }
    else  if (data.weather[0].main === "Drizzle")
    {
        weatherImg.src ="./images/drizzle.png"
    }
    else  if (data.weather[0].main === "Mist")
    {
        weatherImg.src ="./images/mist.png"
    }

}
searchBtn.addEventListener("click", ()=> {
    callApi(searchBox.value);
})

