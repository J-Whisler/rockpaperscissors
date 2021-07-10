import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// const userChoiceAnim = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//       delay: 0.5,
//     },
//   },
//   exit: {
//     opacity: 0,
//   },
// };

// const gameReset = () => {
//   setUserChoice(null);
//   setComputerChoice(null);
//   setResult(null);
//   setUserScore(0);
// };

const GameInfo = ({
  userScore,
  setUserScore,
  userChoice,
  setUserChoice,
  computerChoice,
  setComputerChoice,
  result,
  setResult,
}) => {
  const gameReset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setUserScore(0);
  };
  
  return (
    <GameInfoContainer>
      <div className="choices-container">
        <h3>
          Your Choice: <br />
          <AnimatePresence>
            <em
            //   variants={userChoiceAnim}
            //   initial="initial"
            //   animate="animate"
            //   exit="exit"
            >
              {userChoice}
            </em>
          </AnimatePresence>
        </h3>
        <h3>
          Computer Choice: <br /> <em>{computerChoice}</em>
        </h3>
      </div>
      <div className="result-container">
        <h2>{result}</h2>
      </div>
      <div className="score-container">
        <h3>Your Score: {userScore}</h3>
        <button onClick={() => gameReset()}>Reset</button>
      </div>
    </GameInfoContainer>
  );
};

const GameInfoContainer = styled.div`
  /* border: 2px solid blue; */
  height: 15vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #050a30;
  padding: 0 2rem;
  .choices-container {
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #fad46d;
      font-size: 1.5rem;
      em {
        font-size: 2rem;
        transition: all 0.5s ease-in-out;
      }
    }
  }
  .result-container {
    /* border: 2px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: #fad46d;
      font-size: 2.5rem;
    }
  }
  .score-container {
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    h3 {
      color: #fad46d;
      font-size: 1.5rem;
    }
    button {
      width: 7rem;
      padding: 0.5rem;
      color: #000c66;
      font-size: 1.2rem;
      letter-spacing: 0.3rem;
      background-color: #7ec8e3;
      border: 2px solid #000c66;
      border-radius: 1rem;
      cursor: pointer;
    }
  }
`;

export default GameInfo;
