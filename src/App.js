import React, { useEffect, useState } from 'react';

import './App.css';

import AccountInfo from './components/AccountInfo';
import getUsers from './api/api';

import ImagenBrandon from './images/brandon_400x400.jpg';

function App() {
  const [seguidoresFrancisco, setSeguidoresFrancisco] = useState(199);
  const [cantidadUsuarios, setCantidadUsuario] = useState();

  useEffect(function() {
    getUsers().then(function(users) {
      console.log(users);
      setCantidadUsuario(users.length);
    })
  }, []); 

  return (
    <div className='who-to-follow-container'>
      <h3>Who to follow</h3>

      {/* Utilizando 2nda forma para poner images */}
      <AccountInfo 
        imgSrc="https://pbs.twimg.com/profile_images/1370789650256773120/yZhDPh5B_400x400.jpg" 
        accountInfo="@MrRobotUy"
        numeroSeguidores={seguidoresFrancisco}
        onSeguidoresChange={setSeguidoresFrancisco}
      />

      <p>La cantidad de usuarios es: {cantidadUsuarios}</p>
    </div>
  );
}

export default App;
