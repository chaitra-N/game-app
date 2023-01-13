import React from "react";
import { FaTimes } from "react-icons/fa";
import result from "../src/assets/Winneremoji.jpg";
const Modal = ({ winner, openModal, onClose, restartGame }) => {
  if (!openModal) return null;
  return (
    <div className='overlay'>
      <div className='modalContainer'>
        <img src={result} alt='image' />
        <div className='modalRight'>
          <p onClick={onClose} className='closeBtn'>
            <FaTimes />
          </p>
          <div className='content'>
            <p>Winner : {winner.winner}</p>
          </div>
          <div className='btnContainer'>
            <button
              className='btnPrimary'
              onClick={() => {
                restartGame();
              }}
            >
              Restart game
            </button>
            <button className='btnOutline'>No, Thanks!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
