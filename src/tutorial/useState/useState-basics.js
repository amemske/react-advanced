import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random title');
  const handleClick = () => {
    if (text === 'Random title') {
      setText('We have changed the text');
    } else {
      setText('Random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
