import { useState, useEffect } from "react";
import styled from "styled-components";
import GameInfo from "./GameInfo";

const Game = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [result, setResult] = useState(null);

  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomNumber];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case "ScissorsPaper":
      case "RockScissors":
      case "PaperRock":
        setResult("You Win!");
        setUserScore(userScore + 1);
        break;
      case "PaperScissors":
      case "ScissorsRock":
      case "RockPaper":
        setResult("You Lose!");
        setUserScore(userScore - 1);
        break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorsScissors":
        setResult("Tie!");
        setUserScore(userScore);
        break;
    }
  }, [computerChoice, userChoice]);

  return (
    <>
      <GameInfo
        userScore={userScore}
        setUserScore={setUserScore}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
        computerChoice={computerChoice}
        setComputerChoice={setComputerChoice}
        result={result}
        setResult={setResult}
      />
      <GameContainer>
        <h1>Rock, Paper, Scissors</h1>

        <div className="game-board">
          <div className="game-board-top">
            <h2>
              <i
                className={
                  userChoice === "Rock"
                    ? "fas fa-hand-rock active"
                    : "fas fa-hand-rock"

                  //   setTimeout(
                  //     userChoice === "Rock"
                  //       ? "fas fa-hand-rock active"
                  //       : "fas fa-hand-rock",
                  //     1000
                  //   )
                }
                onClick={() => {
                  setUserChoice("Rock");
                  setTimeout(() => {
                    setUserChoice(null);
                    setComputerChoice(null);
                  }, 1000);
                  generateComputerChoice();
                }}
              ></i>
            </h2>
          </div>
          <div className="game-board-bottom">
            <h2>
              <i
                className={
                  userChoice === "Paper"
                    ? "fas fa-hand-paper active"
                    : "fas fa-hand-paper"
                }
                onClick={() => {
                  setUserChoice("Paper");
                  setTimeout(() => {
                    setUserChoice(null);
                    setComputerChoice(null);
                  }, 8000);
                  generateComputerChoice();
                }}
              ></i>
            </h2>

            <h2>
              <i
                className={
                  userChoice === "Scissors"
                    ? "fas fa-hand-scissors active"
                    : "fas fa-hand-scissors"
                }
                onClick={() => {
                  setUserChoice("Scissors");
                  setTimeout(() => {
                    setUserChoice(null);
                    setComputerChoice(null);
                  }, 8000);
                  generateComputerChoice();
                }}
              ></i>
            </h2>
          </div>
          {/* <div className="button-container">
            {choices.map((choice, index) => (
              <button key={index}>{choice}</button>
            ))}
          </div> */}
        </div>
      </GameContainer>
    </>
  );
};

const GameContainer = styled.div`
  /* border: 2px solid red; */
  height: 85.1vh;

  text-align: center;
  background: #050a30;
  color: #7ec8e3;
  h1 {
    font-size: 3rem;
  }
  .game-board {
    /* border: 2px solid yellow; */
    height: 77vh;
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    i {
      color: #050a30;
      cursor: pointer;
      background-color: #7ec8e3;
      font-size: 4rem;
      padding: 3rem;
      border-radius: 50%;

      border: 0.8rem solid #050a30;
      transition: all 0.7s ease-in-out;
      &.active {
        border: 0.8rem solid #fad46d;
        box-shadow: 0px 0px 30px #f7db91;
      }
    }

    .game-board-top {
      /* border: 2px solid blue; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .game-board-bottom {
      /* border: 2px solid green; */
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      h4 {
        font-size: 4rem;
        color: #fad46d;
        /* text-shadow: 0px 0px 3px #fad46d; */
      }
    }
  }
`;

export default Game;
