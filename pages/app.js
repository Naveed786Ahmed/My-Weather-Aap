
let urlKey = "dffce46ebcae0f1e84bc0d68a3961116";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
const time = document.getElementById("time")

if (hours > 12) {
    time.innerHTML = hours + ":" + minutes + " " + "PM"
}
else {
    time.innerHTML = hours + ":" + minutes + " " + "AM"
}

const search = () => {
    const searchInp = document.getElementById("search")
    const temp = document.getElementById("temps")
    const weatherType = document.getElementById("weather-types")
    const weatherImage = document.querySelector(".weather-images")
    const winds = document.getElementById("wind")
    const humidities = document.getElementById("Humidity")
    const feelsLike = document.getElementById("feelsLike")
    const pressure = document.getElementById("pressure")
    const tempMax = document.getElementById("tempMax")
    const description = document.getElementById("description")

    let data = fetch(url + `&appid=` + urlKey + `&q=` + searchInp.value)
    data.then((res) => {
        return res.json()
    }).then((res) => {
        temp.innerHTML = `${Math.round(res.main.temp)} °C`
        weatherType.innerHTML = res.weather[0].main
        winds.innerHTML = `${Math.round(res.wind.speed)} Km/h`
        humidities.innerHTML = `${res.main.humidity} %`
        feelsLike.innerHTML = `${Math.round(res.main.feels_like)} °C`
        pressure.innerHTML = `↓ ${res.main.pressure} mb`
        tempMax.innerHTML = `${Math.round(res.main.temp_max)} °C`
        description.innerHTML = res.weather[0].description

        if (res.weather[0].main == "Clear") {
            weatherImage.src = "../images/clear.png"
        }
        else if (res.weather[0].main == "Clouds") {
            weatherImage.src = "../images/clouds.png"
        }
        else if (res.weather[0].main == "Drizzle") {
            weatherImage.src = "../images/drizzle.png"
        }
        else if (res.weather[0].main == "Humidity") {
            weatherImage.src = "../images/humidity.png"
        }
        else if (res.weather[0].main == "Mist") {
            weatherImage.src = "../images/mist.png"
        }
        else if (res.weather[0].main == "Rain") {
            weatherImage.src = "../images/rain.png"
        }
        else if (res.weather[0].main == "Snow") {
            weatherImage.src = "../images/snow.png"
        }
        else if (res.weather[0].main == "Wind") {
            weatherImage.src = "../images/wind.png"
        }
    })


}


const searchBtn = document.getElementById("search-btn")
searchBtn.addEventListener("click", search)