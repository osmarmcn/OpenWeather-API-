//67bd416e05a29b82305240a9e92925db

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


const KEY_API = "67bd416e05a29b82305240a9e92925db"



let cityInput = document.querySelector("#city-input")
let searchBTN = document.querySelector("#search")

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const humidityElement = document.querySelector('#umidity span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const windElement = document.querySelector('#wind span')

const weatherContainer = document.querySelector('#weather-data')





//function

const getWeatherData = async(city) =>{
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY_API}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()
    
    return data
}

const weatherData = async (city) =>{
   const data = await getWeatherData(city)

   cityElement.innerText = data.name
   tempElement.innerText = parseInt(data.main.temp)
   descElement.innerText = data.weather[0].description
   
   weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
   

   humidityElement.innerText = `${data.main.humidity}%`

   windElement.innerText = `${data.wind.speed}km/h`
   weatherContainer.classList.remove("hide")
}

//event
searchBTN.addEventListener("click",(e) =>{

    e.preventDefault()

    const city = cityInput.value

    weatherData(city)
    
})

cityInput.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const city = e.target.value

        weatherData(city)
    }
})