import React from 'react';
import squirtles from './squirtles.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={squirtles} className="selfie" alt="selfie" />
        <p>
          Sup bruh I'm John
          <br></br>
          (A work in progress)
        </p>

      </header>
    </div>
  );
}

export default App;
