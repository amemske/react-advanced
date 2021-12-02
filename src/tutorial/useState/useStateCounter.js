import React, { useState } from 'react';

const useStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleReset = () => {
    setValue(0);
  };
  const handleComplexCounter = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <section className='container'>
      <div className='counter01'>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button type='button' onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button type='button' onClick={handleReset}>
          Reset
        </button>
        <button type='button' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
      </div>
      <div className='counter02'>
        <h2>Complex Counter with delay</h2>
        <h1>{value}</h1>
        <button type='button' onClick={handleComplexCounter}>
          Increase
        </button>
      </div>
    </section>
  );
};

export default useStateCounter;
