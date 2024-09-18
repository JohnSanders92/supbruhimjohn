import React from 'react';
import selfie from './me2.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="hero">
          <svg className="circle-text"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill='transparent'
              id="circlePath"
              d="
                  M 10, 50
                  a 40,40 0 1,1 80,0
                  40,40 0 1,1 -80,0
                "
            />
            <text fill="currentColor">
              <textPath href="#circlePath">
              Sup bruh I'm John
              </textPath>
            </text>
          </svg>
          <div className="rounded-boarder">
            <img src={selfie} className="selfie" alt="selfie" />
          </div>
        </div>

        <p>
          (A work in progress)
        </p>

      </header>
    </div>
  );
}

export default App;
