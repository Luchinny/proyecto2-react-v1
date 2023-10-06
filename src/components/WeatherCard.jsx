import { useState } from "react"
import "./styles/clima.css"
const WeatherCard = ( { weather, temp } ) => {

    const [isCelcius, setIsCelcius] = useState(true)

    const handleChangeTemp = () => setIsCelcius (!isCelcius)

  return (
    <>
    <img className="img__fondo" src="./img/clima.png" alt="" />
  <article className="clima__app">
    <h1>Weather app</h1>
    <h2>{weather?.name}, {weather?.sys.country}</h2>
    <div className="clima__body">
        <div className="clima__img">
        <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
        <section className="description__clima">
            <h3>`{weather?.weather[0].description}`</h3>
            <ul>
                <li className="clima__properies"><span className="clima__properies__level">Wind Speed</span><span>{weather?.wind.speed}m/s</span></li>
                <li className="clima__properies"><span className="clima__properies__level">Clouds</span><span>{weather?.clouds.all}%</span></li>
                <li className="clima__properies"><span className="clima__properies__level">Pressure</span><span>{weather?.main.pressure}hpa</span></li>
            </ul>
        </section>
    </div>
    <h2>{ isCelcius? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
    <button className="change__grades" onClick={handleChangeTemp}>{isCelcius ? `Change to °F` : `Change to °C`}</button>
  </article>
  </>
  )
}

export default WeatherCard
