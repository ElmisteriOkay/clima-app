import React, {useState} from 'react';
import Data from './components/Data';

const api = {
  key: "bedfd8f1fa72e543d6e7f6a9f82319dc",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('London');
  const [weather, setWeather] = useState({});

  const search = e => {
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
          setWeather(result);
          setQuery('');
        }
      )
    }
  }

  return (
    <div className=
      {(typeof weather.main != "undefined") ? 
        ((weather.main.temp > 18) 
        ? 'app warm'
        : 'app') : 'app'
      }
        >
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..." 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        <Data weather={weather}/>
        
      </main>
    </div>
  );
}

export default App;
