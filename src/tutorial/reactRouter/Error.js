import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <h2>Error page</h2>
      <main style={{ padding: '1rem' }}>
        <p>There's nothing here!</p>
        <Link to='/'>Back Home</Link>
      </main>
    </div>
  );
}

export default Error;
