import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const useEffectFetchData = () => {
  //setup users
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const url = 'https://api.github.com/users';
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id} className='cardList'>
              <img src={avatar_url} alt={login} className='round' />
              <div>
                <h3>{login}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default useEffectFetchData;
