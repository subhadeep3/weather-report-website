const cityName = document.querySelector('#city-name')
const form = document.querySelector('form')
const innerData=document.querySelector('.data')
const loading=document.querySelector('.loading')
const clear_sky=document.querySelector('#clear_sky')
const clear_sky_night=document.querySelector('#clear_sky_night')
const few_clouds_day=document.querySelector('#few_clouds_day')
const few_clouds_night=document.querySelector('#few_clouds_night')
const scattered_clouds_day=document.querySelector('#scattered_clouds_day')
const scattered_clouds_night=document.querySelector('#scattered_clouds_night')
const broken_clouds_day=document.querySelector('#broken_clouds_day')
const broken_clouds_night=document.querySelector('#broken_clouds_night')
const shower_rain_day=document.querySelector('#shower_rain_day')
const shower_rain_night=document.querySelector('#shower_rain_night')
const rain_day=document.querySelector('#rain_day')
const rain_night=document.querySelector('#rain_night')
const thunderstorm_day=document.querySelector('#thunderstorm_day')
const thunderstorm_night=document.querySelector('#thunderstorm_night')
const snow_day=document.querySelector('#snow_day')
const snow_night=document.querySelector('#snow_night')
const mist_day=document.querySelector('#mist_day')
const mist_night=document.querySelector('#mist_night')


function resetOpacity(){
    clear_sky.style.opacity=0
    clear_sky_night.style.opacity=0
    few_clouds_day.style.opacity=0
    few_clouds_night.style.opacity=0
    scattered_clouds_day.style.opacity=0
    scattered_clouds_night.style.opacity=0
    broken_clouds_day.style.opacity=0
    broken_clouds_night.style.opacity=0
    shower_rain_day.style.opacity=0
    shower_rain_night.style.opacity=0
    rain_day.style.opacity=0
    rain_night.style.opacity=0
    thunderstorm_day.style.opacity=0
    thunderstorm_night.style.opacity=0
    snow_day.style.opacity=0
    snow_night.style.opacity=0
    mist_day.style.opacity=0
    mist_night.style.opacity=0





}





const apiKey='3265874a2c77ae4a04bb96236a642d2f'

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    // console.log(cityName.value)
    // cityName.value = ''
    const fetchWeather = async function(){
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`)
        const responseJSON= await response.json()
        return responseJSON;
    }
   


    const weatherData=fetchWeather()
    weatherData.then((data)=>{
        innerData.innerHTML=''
        loading.style.display='block'
        let html =`
        <div class="city-container">
        <div class="city-name">${data.name},${data.sys.country}</div>
        <div class="weather-condition">${data.weather[0].main}</div>
    </div>
    <div class="temp-container">
        <div class="weather-icon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="20%" alt=""></div>
        <div class="temp">${data.main.temp}°C</div> 
        <div class="minmax">
            <div class="min">Min : ${data.main.temp_min}°C</div>
            <div class="max">Max : ${data.main.temp_max}°C</div>
        </div>      
    </div>`

        innerData.innerHTML=html
        loading.style.display='none'
        switch (data.weather[0].icon) {
            case '01d':
                resetOpacity()
                clear_sky.style.opacity=1
                break;
            case '01n':
                resetOpacity()
                clear_sky_night.style.opacity=1
                break;   
            case '02d':
                resetOpacity()
                few_clouds_day.style.opacity=1
                break;
            case '02n':
                resetOpacity()
                few_clouds_night.style.opacity=1 
                break;
            case '03d':
                resetOpacity()
                scattered_clouds_day.style.opacity=1
                break;
            case '03n':
                resetOpacity()
                scattered_clouds_night.style.opacity=1
                break;
            case '04d':
                resetOpacity()
                broken_clouds_day.style.opacity=1
                break;
            case '04n':
                resetOpacity()
                broken_clouds_night.style.opacity=1
                break;
            case '09d':
                resetOpacity()
                shower_rain_day.style.opacity=1
                break;
            case '09n':
                resetOpacity()
                shower_rain_night.style.opacity=1
                break;
            case '10d':
                resetOpacity()
                rain_day.style.opacity=1
                break;
            case '10n':
                resetOpacity()
                rain_night.style.opacity=1
                break;
            case '11d':
                resetOpacity()
                thunderstorm_day.style.opacity=1
                break;
            case '11n':
                resetOpacity()
                thunderstorm_night.style.opacity=1
                break;
            case '13d':
                resetOpacity()
                snow_day.style.opacity=1
                break;
            case '13n':
                resetOpacity()
                snow_night.style.opacity=1  
                break;   
            case '50d':
                resetOpacity()
                mist_day.style.opacity=1
                break;
            case '50n':
                resetOpacity()
                mist_night.style.opacity=1  
                break;         




        
            default:
                break;
        }
    })
    cityName.value=''
    loading.style.display='block'
})
