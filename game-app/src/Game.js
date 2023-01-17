import React from "react";
import Square from "./Square";
import { useState, useEffect } from "react";
import { WinningPatterns } from "./WinningPatterns";
import Modal from "./Modal";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState({ winner: "none", state: "none" });
  const [openModal, setModel] = useState(false);

  useEffect(() => {
    checkWinner();
    checkGameTie();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (winner.state !== "none") {
      setModel(true);
      restartGame();
    }
  }, [winner]);

  const checkSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const checkWinner = () => {
    WinningPatterns.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer === "") {
        return;
      }
      let foundWinnerPattern = true;
      pattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinnerPattern = false;
        }
      });
      if (foundWinnerPattern) {
        setWinner({
          winner: player,
          state: "Congragulations you are the Winner",
        });
      }
    });
  };

  const checkGameTie = () => {
    let filled = true;
    board.forEach((sqaure) => {
      if (sqaure === "") {
        filled = false;
      }
    });
    if (filled) {
      setWinner({ winner: "Game is Tied", state: "No One" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className='game'>
      <Modal
        openModal={openModal}
        onClose={() => setModel(false)}
        winner={winner}
        restartGame={restartGame}
      />
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
