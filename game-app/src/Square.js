import React from "react";

const Square = ({ val, checkSquare }) => {
  return (
    <div className='square' onClick={checkSquare}>
      {val}
    </div>
  );
};

export default Square;
