import React from "react";
import Square from "./Square";
import { useState, useEffect } from "react";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <div className='game'>
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} />
        </div>
      </div>
    </div>
  );
};

export default Game;
