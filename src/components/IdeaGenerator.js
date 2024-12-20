import React, { useState, useEffect } from 'react';

function IdeaGenerator() {
    const strings = [
        "Elephant",
        "Eiffel Tower",
        "Eggplant",
        "Enderman",
        "Empire State Building",
        "Ewok",
        "Eclipse",
        "Emoji",
        "Electric Guitar",
        "Endgame",
        "Explosion",
        "Eraser",
        "Earthquake",
        "Elf",
        "Envelope",
        "Emerald",
        "Eagle",
        "Elmo",
        "End Portal",
        "Eye",
        "Ear",
        "Egg",
        "Elevator",
        "Engine",
        "Easel",
        "Eraser",
        "Excavator",
        "Echo",
        "Electricity",
        "Elk",
        "Earring",
        "Earth",
        "Elbow",
        "Engine",
        "Eggshells",
        "Earmuffs",
        "Easel",
        "Eye Patch",
        "Easy Win"
    ];const [currentWord, setCurrentWord] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(90);
    const [successfulEs, setSuccessfulEs] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval = null;
      if (isActive && timeRemaining > 0) {
        interval = setInterval(() => {
          setTimeRemaining(time => time - 1);
        }, 1000);
      } else if (timeRemaining === 0) {
        setIsActive(false);
      }
      return () => clearInterval(interval);
    }, [isActive, timeRemaining]);
  
    const getRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * strings.length);
      return strings[randomIndex];
    };
  
    const handleStart = () => {
      setCurrentWord(getRandomWord());
      setTimeRemaining(90);
      setIsActive(true);
    };
  
    const handleSuccess = () => {
      setCurrentWord(getRandomWord());
      setSuccessfulEs(successfulEs + 1);
    };
  
    return (
      <div>
        <h2>Idea Generator</h2>
        <p>Your word: {currentWord}</p>
        <p>Time Remaining: {timeRemaining}s</p>
        <p>Successful Es: {successfulEs}</p>
        <button onClick={handleStart} disabled={isActive}>Start</button>
        <button onClick={handleSuccess} disabled={!isActive}>Success? Get a new word</button>
      </div>
    );
  };
  
  export default IdeaGenerator;