import React, { useState } from 'react';
import selfie from './me2.webp'
import './App.css';
import { parseJsonText } from 'typescript';

function App() {
  const [rotateCirlceParent, setRotateCicleParent] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <div className="circle-image">
            <img src={selfie} className="selfie" alt="selfie" />
          </div>

          <div className={"circle-parent"} id="circle-rotate">
            <svg
              onClick={() => setRotateState()}
              className="top-circle-text"
              viewBox="-19 -35 201.45841 100.72921"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill="transparent"
                id="topCircle"
                d="m -19.236045,66.110773 a 100.96525,101.46976 0 1 1 201.930495,0" />
              <text
                fill="currentColor">
                <textPath
                  startOffset="50%" textAnchor="middle"
                  href="#topCircle">
                  Sup bruh I'm John
                </textPath>
              </text>
            </svg>

            <svg
              onClick={() => setRotateState()}
              className="bottom-circle-text"
              viewBox="-19 -35 201.9305 101.47986"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill="transparent"
                id="bottomCircle"
                d="M -18.999999,-35 A 100.96525,101.46976 0 1 0 182.9305,-35" />
              <text
                fill="currentColor"><textPath
                  dominantBaseline="middle"
                  startOffset="50%"
                  textAnchor="middle"
                  href="#bottomCircle">
                  Stay radical dude</textPath></text>
            </svg>
          </div>
        </div>

        <p className='progress'>
          (A work in progress)
        </p>

      </header>
    </div>
  );

  function setRotateState() {
    setRotateCicleParent(!rotateCirlceParent)
    document.getElementById("circle-rotate")!.style.animationPlayState = rotateCirlceParent ? "running" : "paused"
  }
}

export default App;
