import React, { useState } from 'react';

const ShortCircuitEvaluation = () => {
  const [message, setMessage] = useState('K');

  return (
    <>
      {message && <h1> Welcome Back</h1>}
      {message ? (
        <p>there is a message</p>
      ) : (
        <div>
          <h2> there is no message</h2>
        </div>
      )}
      <button
        type='button'
        onClick={() => {
          setMessage(!message);
        }}
      >
        Toggle Message
      </button>
    </>
  );
};

export default ShortCircuitEvaluation;
