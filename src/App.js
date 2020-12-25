import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import InfoBox from './components/InfoBox/InfoBox';
import Map from './components/Map/Map';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="app"> 
      <div className="app_left">
        <div>
          <Header></Header>
        </div>
        <div className="app_stats">
            <InfoBox title="Coronavirus Cases" total= {2000} />

            <InfoBox title="Recovered" cases={3009} total= {3239} />

            <InfoBox title="Deaths" cases={4039} total= {3249}/>
            
        </div>
        
        <Map />

      
      </div>
      <div className="app_right">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
