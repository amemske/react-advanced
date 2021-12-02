import React from 'react';

const ErrorExample = () => {
  let title = 'Some random title';

  const clickHandler = () => {
    title = 'hello people';
    console.log(title);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={clickHandler}>
        Change Title
      </button>
    </div>
  );
};

export default ErrorExample;
