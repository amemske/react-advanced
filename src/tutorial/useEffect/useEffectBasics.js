import React, { useState, useEffect } from 'react';

const useEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New messages ${value}`;
    }
  });

  console.log('render component');
  return (
    <>
      <h2>{value}</h2>
      <button
        type='button'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me!
      </button>
    </>
  );
};

export default useEffectBasics;
