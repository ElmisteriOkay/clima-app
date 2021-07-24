import React, {useState} from 'react';

function Data({weather}){
    const [grados, setGrados] = useState('');

    const dateBuiler = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`;
    }


    return (
    <div>
    {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuiler(new Date())}</div>
          </div>

          <div className="weather-box">
            <div className="temp">
              {
                (grados === 'c') ? 
                (`${Math.round(weather.main.temp)}ºC`) : 
                (`${Math.round((weather.main.temp * (9/5)) + 32)}ºF`)
              }

            </div>
            <div className="type-temp">
              <div className="celcius">
                <input type="radio" name="g" id="celcius" onChange={e => setGrados('c')} selected/>
                <label label for="celcius">Cº</label>
              </div>
              <div className="fahrenheit">
                <input type="radio" name="g" id="fahrenheit" onChange={e => setGrados('f')}/>
                <label for="farenheit">Fº</label>
              </div>
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>  
        </div>
      ) : ('')}</div>);

}

export default Data;