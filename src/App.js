import React from 'react';

import './App.css';

import AccountInfo from './components/AccountInfo';

import ImagenBrandon from './images/brandon_400x400.jpg';

function App() {
  return (
    <div className='who-to-follow-container'>
      <h3>Who to follow</h3>


      {/* Utilizando 1era forma para poner images */}
      <AccountInfo imgSrc="./images/jose_maria_400x400.jpg" accountInfo="@JoseMaria" numeroSeguidores={100} />

      {/* Utilizando 2nda forma para poner images */}
      <AccountInfo 
        imgSrc="https://pbs.twimg.com/profile_images/1370789650256773120/yZhDPh5B_400x400.jpg" 
        accountInfo="@MrRobotUy"
        numeroSeguidores={230}
      />

      {/* Utilizando 1era forma para poner images */}
      <AccountInfo imgSrc={ImagenBrandon} accountInfo="@Brandon" numeroSeguidores={1000} />


    </div>
  );
}

export default App;
