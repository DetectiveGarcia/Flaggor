import Continent from './Components/Continent';
import './App.css';
import { useState } from 'react';

function App() {

  let [showContinents, setShowContinents] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <p>Select continent</p>
          <select id='continentSelect'>
            <option value={'africa'}>Afrika</option>
            <option value={'asia'}>Asia</option>
            <option value={'europe'}>Europa</option>
          </select>
          <br></br>
          <button onClick={() => {
            setShowContinents(!showContinents)
       
          }}>Show countries</button>
          
          {showContinents && <Continent data={document.querySelector('#continentSelect').value}/>}
      </header>
    </div>
  );
}

export default App;
