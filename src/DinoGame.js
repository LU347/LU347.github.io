import React, { useState, useEffect, useRef } from 'react';

const DinoGame = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const dinoRef = useRef(null);
  const CACTUS_LEFT_TRESHOLD = 25;
  const DINO_TOP_TRESHOLD = 80;

  useEffect(() => {
    let dino = dinoRef.current;
    let cactus = document.getElementById("cactus");
    let scoreLabel = document.getElementById("score");

    let isAlive = setInterval(() => {
      if (!dino || !cactus || !scoreLabel) {
        dino = dinoRef.current;
        cactus = document.getElementById("cactus");
        scoreLabel = document.getElementById("score");
      }

      if (dino !== null && cactus !== null) {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        
        if (cactusLeft < CACTUS_LEFT_TRESHOLD && cactusLeft > 0 && dinoTop >= DINO_TOP_TRESHOLD) { //TODO: magic numbers
            if (currentScore - 50 <= 0) {
              setCurrentScore(prevScore => 0);
              updateScoreLabel('red', currentScore);
            } else {
              setCurrentScore(prevScore => prevScore - 50);
              updateScoreLabel('red', currentScore);
            }
            
        } else if (cactusLeft < CACTUS_LEFT_TRESHOLD && cactusLeft > 0 && dinoTop <= DINO_TOP_TRESHOLD) {
            setCurrentScore(prevScore => prevScore + 100);
            updateScoreLabel('green', currentScore); 
        } else {
            scoreLabel.style.color = 'white';
        }
      }
    }, 10);

    //TODO: Add Keybind functions
    document.addEventListener("keydown", jump);

    function updateScoreLabel(color, value) {
      scoreLabel.style.color = color;
      scoreLabel.innerHTML = value.toString() + "&nbsp;";
    } 

    return () => {
      clearInterval(isAlive);
      document.removeEventListener("keydown", jump);
    };
  }, [currentScore]);


  function jump() {
    if (!dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(function () {
        dinoRef.current.classList.remove("jump");
      }, 300);
    }
  }

  return (
    <div class="game-container">
      <div class="game-info">
        <p>Score:&nbsp;</p>
        <p id="score">0</p>
        <p>| Any key to jump</p>
      </div>
      <div className="game">
        <div id="dino" ref={dinoRef}></div>
        <div id="cactus"></div>
      </div>
    </div>
  );
};

export default DinoGame;
