import React from "react";
import Square from "./Square";
import { useState, useEffect } from "react";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const checkSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }
        console.log(val);
        return val;
      })
    );
  };

  return (
    <div className='game'>
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} checkSquare={() => checkSquare(0)} />

          <Square val={board[1]} checkSquare={() => checkSquare(1)} />

          <Square val={board[2]} checkSquare={() => checkSquare(2)} />
        </div>
        <div className='row'>
          <Square val={board[3]} checkSquare={() => checkSquare(3)} />

          <Square val={board[4]} checkSquare={() => checkSquare(4)} />

          <Square val={board[5]} checkSquare={() => checkSquare(5)} />
        </div>
        <div className='row'>
          <Square val={board[6]} checkSquare={() => checkSquare(6)} />

          <Square val={board[7]} checkSquare={() => checkSquare(7)} />

          <Square val={board[8]} checkSquare={() => checkSquare(8)} />
        </div>
      </div>
    </div>
  );
};

export default Game;
