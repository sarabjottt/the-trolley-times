import React, { useEffect, useState } from 'react';

export default function Weather() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);

  function FetchWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=${process.env.GATSBY_OPENWEATHER_API}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        localStorage.setItem('weather', JSON.stringify(data));
        localStorage.setItem('wTime', Date.now());
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (!localStorage.getItem('weather')) {
      FetchWeather();
    }
    if (localStorage.getItem('weather')) {
      setWeather(JSON.parse(localStorage.getItem('weather')));
      setLoading(false);
    }
    const timeSinceFetch = Date.now() - localStorage.getItem('wTime');
    if (timeSinceFetch >= 3600000) {
      localStorage.removeItem('weather');
      FetchWeather();
    }
  }, []);

  return (
    <>
      {!loading && (
        <div className="wrapper">
          <div className="w-container">
            <span className="icon">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                title={weather.weather[0].description}
                alt={weather.weather[0].main}
              />
            </span>
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <span className="temp-max">
              {Math.round(weather.main.temp_max)}°
              <span className="temp-min">
                {Math.round(weather.main.temp_min)}°
              </span>
            </span>
          </div>
          <p>Delhi, India</p>
        </div>
      )}
    </>
  );
}
