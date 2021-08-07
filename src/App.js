import React, {useState} from 'react';
import Data from './components/Data';
import Search from './components/Search';

const api = {
  key: "bedfd8f1fa72e543d6e7f6a9f82319dc",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState({});

  const search = query => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
        setWeather(result);
      }
    )
  }

  return (
    <div className=
      {(typeof weather.main != "undefined") ? 
        ((weather.main.temp > 18) 
        ? 'app warm'
        : 'app') : 'app'
      }
        >
      <main class="principal">
        <h2>Clima Mundial</h2>
        <Search search={search}/>

        <Data weather={weather}/>
        
      </main>
    </div>
  );
}

export default App;
