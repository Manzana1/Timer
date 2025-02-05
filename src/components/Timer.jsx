import { useState, useEffect } from "react";

function Timer({ duration }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isPaused, setIsPaused] = useState(false); // paused timer
  const [initialTime] = useState(duration); // Garde la valeur initiale pour le reset

  useEffect(() => {
    if (timeLeft <= 0 || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPaused]);

  //ajout des fonctions "paused/reprendre et "reset"
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const resetTimer = () => {
    setTimeLeft(initialTime);
    setIsPaused(false);
  };

  //   formater le temps affiché pour qu'il soit plus lisible
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <h2>Time Left: {formatTime(timeLeft)}</h2>
      <div className="timer-buttons">
        <button onClick={togglePause}>
          {isPaused ? (
            <img src="/play-solid.svg" alt="Reprendre" width="24" height="24" />
          ) : (
            <img src="/pause-solid.svg" alt="Pause" width="24" height="24" />
          )}
        </button>
        <button onClick={resetTimer}>
          <img
            src="/arrow-rotate-left-solid.svg"
            alt="Reset"
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  );
}
export default Timer;
