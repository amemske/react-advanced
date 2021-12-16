import React, { useState, useEffect } from 'react';
import { data } from '../../data';
import { Link, useParams } from 'react-router-dom';

function Person() {
  const [name, setName] = useState('default name');
  //console.log(useParams());
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => {
      return person.id === parseInt(id);
    });
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'>
        Back to People
      </Link>
    </div>
  );
}

export default Person;
