import './App.css';
import Intervalo from './components/Intervalo'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorteio from './components/Sorteio'
import { useState } from 'react';

function App() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercício React-Redux Simples</h1>
        <div className='linha'>
          <Intervalo
            min={min}
            max={max}
            onMinChange={setMin}
            onMaxChange={setMax}
          ></Intervalo>
        </div>
        <div className='linha'>
          <Media min={min} max={max}></Media> 
          <Soma min={min} max={max}></Soma> 
          <Sorteio min={min} max={max}></Sorteio> 
        </div>
      </header>
    </div>
  );
}

export default App;
