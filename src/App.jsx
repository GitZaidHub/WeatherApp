import { useState } from 'react'
import CurrentWeather from './components/currentWeather/CurrentWeather'
import { WEATHER_API_KEY } from './components/api/api'
import WeatherForcast from './components/forcast/WeatherForcast'
import Footer from './components/footer/Footer'
import Logo from './components/logo/Logo'
import './App.css'
import Search from './components/search/Search'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forcastWeather, setForcastWeather] = useState(null)

  const handleOnsearchChnage = (searchData) => {
    const [lat,lon]=searchData.value.split(" ")

    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forcastWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch,forcastWeatherFetch])
    .then(async(response)=>{
     const weatherResponse = await response[0].json()
     const forcastResponse = await response[1].json()

     setCurrentWeather({city:searchData.label,...weatherResponse})
     setForcastWeather({city:searchData.label,...forcastResponse})
    }).catch((err)=>console.log(err))

  }

  return (
    <>
    <div className='absolute blur-sm'>
      <img className='h-[99vh] w-[100vw]' src="/white.jpg" alt="" />
    </div>
    <div className='h-[99vh] overflow-auto w-full font-mono text-white relative'>
      <div className='min-h-[91vh]'>
      <Logo/>
    <Search  onSearchChange={handleOnsearchChnage}/>
    { currentWeather && <CurrentWeather data={currentWeather}/>}
    {forcastWeather && <WeatherForcast data={forcastWeather}/>}
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default App
