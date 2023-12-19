import React, { useState, useEffect, useRef } from 'react';

const DinoGame = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const dinoRef = useRef(null);

  useEffect(() => {
    let dino = dinoRef.current;
    let cactus = document.getElementById("cactus");
    let scoreLabel = document.getElementById("score");

    let isAlive = setInterval(() => {
      if (dino == null || cactus == null || scoreLabel == null) {
        dino = dinoRef.current;
        cactus = document.getElementById("cactus");
        scoreLabel = document.getElementById("score");
      }

      if (dino !== null && cactus !== null) {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 12 && cactusLeft > 0 && dinoTop >= 80) { //TODO: magic numbers
            setCurrentScore(prevScore => prevScore - 50);
            scoreLabel.style.color = 'red';
            scoreLabel.innerHTML = "Score: " + currentScore.toString();
        } else if (cactusLeft < 12 && cactusLeft > 0 && dinoTop <= 80) {
            setCurrentScore(prevScore => prevScore + 100);
            scoreLabel.style.color = 'green';
            scoreLabel.innerHTML = "Score: " + currentScore.toString();
        }
      }
    }, 10);
    //TODO: Add Keybind functions
    document.addEventListener("keydown", jump);

    return () => {
      clearInterval(isAlive);
      document.removeEventListener("keydown", jump);
    };
  }, [currentScore]);

  function jump() {
    if (dinoRef.current.classList !== "jump") {
      dinoRef.current.classList.add("jump");
      setTimeout(function () {
        dinoRef.current.classList.remove("jump");
      }, 300);
    }
  }

  return (
    <div className="container">
      <div>
        <p id="score">Score: 0</p>
        <p>P to Pause R to Restart</p>
      </div>
      <div className="game">
        <div id="dino" ref={dinoRef}></div>
        <div id="cactus"></div>
      </div>
    </div>
  );
};

export default DinoGame;
