import { useState } from "react";
import styled from "styled-components";
import GameInfo from "./GameInfo";

const Game = () => {
  return (
    <>
      <GameInfo />
      <GameContainer>Game</GameContainer>
    </>
  );
};

const GameContainer = styled.div`
  border: 2px solid red;
  height: 90vh;
`;

export default Game;
