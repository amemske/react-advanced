import React, { useState, useEffect } from 'react';

const useEffectClean = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    //effect
    window.addEventListener('resize', checkSize);
    return () => {
      //cleanup
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div>
      <h2>Check window width</h2>
      <h1>{size}</h1>
    </div>
  );
};

export default useEffectClean;
