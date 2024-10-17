import React from 'react'

const CurrentWeather = ({data}) => {
    const iconCode = data.weather[0].icon;
     const iconPath = `/icons/${iconCode}.png`;
  return (
    <div className='report py-2 mt-2 mx-auto md:w-1/2 w-[80%]  bg-black bg-opacity-40 rounded-xl  shadow-xl hover:shadow-2xl hover:text-black hover:bg-transparent '>
      <div className="top flex md:justify-around justify-between items-center">
        <div >
            <p className='city font-bold md:text-3xl text-lg'>{data.city}</p>
            <p className='md:font-semibold'>{data.weather[0].description}</p>
        </div>
        <img className='' src={iconPath} alt="weatherIcon" />
      </div>
      <div className="bottom flex justify-around">
        <div className="temp">
            <p className='md:text-4xl text-3xl font-extrabold'>{Math.round(data.main.temp)}°C</p>
        </div>
        <div className="details ">
            <div className="parameter-row">
                <span className='label underline'>Details</span>
            </div>
            <div className="parameter-row flex justify-between gap-2 md:text-lg text-sm">
                <span className='label'>Feels Like</span>                
                <span className='value'>{Math.round(data.main.feels_like)}°C</span>                
            </div>
            <div className="parameter-row flex justify-between gap-2 md:text-lg text-sm">
                <span className='label'>Humidity</span>                
                <span className='value'>{Math.round(data.main.humidity)} %</span>                
            </div>
            <div className="parameter-row flex justify-between gap-2 md:text-lg text-sm">
                <span className='label'>Wind </span>                
                <span className='value'>{Math.round(data.wind.speed)} m/s</span>                
            </div>
            <div className="parameter-row flex justify-between gap-2 md:text-lg text-sm">
                <span className='label'>Pressure </span>                
                <span className='value'>{Math.round(data.main.pressure)}hPa</span>                
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
