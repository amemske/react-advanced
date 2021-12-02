import React from 'react';
import { data } from '../../data';

function useStateArray() {
  const [people, setPeople] = React.useState(data);

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className='card'>
            <h3> {name}</h3>
            <button type='button' onClick={() => removePerson(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type='button' onClick={() => setPeople([])}>
        Delete Items
      </button>
    </div>
  );
}

export default useStateArray;
