import React, { useState } from 'react';

const useStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'Random message',
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'Message has changed!' });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type='button' onClick={changeMessage}>
        Change message
      </button>
    </div>
  );
};

export default useStateObject;
