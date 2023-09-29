import './App.css';
import Intervalo from './components/Intervalo'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorteio from './components/Sorteio'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercício React-Redux Simples</h1>
        <div className='linha'>
          <Intervalo></Intervalo>
        </div>
        <div className='linha'>
          <Media></Media> 
          <Soma></Soma> 
          <Sorteio></Sorteio> 
        </div>
      </header>
    </div>
  );
}

export default App;
