//67bd416e05a29b82305240a9e92925db

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


const KEY_API = "67bd416e05a29b82305240a9e92925db"

const countryURL = "https://countryflagsapi.com/png/"


let cityInput = document.querySelector("#city-input")
let searchBTN = document.querySelector("#search")

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const umidityElement = document.querySelector('#umidity span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const windElement = document.querySelector('#wind span')



//function

const getWeatherData = async(city) =>{
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY_API}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()
    console.log(data)
}

const weatherData = (city) =>{
    getWeatherData(city)

}

//event
searchBTN.addEventListener("click",(e) =>{

    e.preventDefault()

    const city = cityInput.value

    weatherData(city)
    
})