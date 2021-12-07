import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        type='button'
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    //cleanupfunction, to avoid multiple event listeners
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h3>Window size</h3>
      <h1>{size}</h1>
    </>
  );
};

export default ShowHide;
