import React, { useState, useEffect } from 'react';

import './AccountInfo.css';

function AccountInfo({ imgSrc, accountInfo, numeroSeguidores, onSeguidoresChange }) {
  const [siguiendo, setSiguiendo] = useState(false);
  const [mensajeFelicitaciones, setMensajeFelicitaciones] = useState('');

  useEffect(function() {
    if (numeroSeguidores >= 200) {
      setMensajeFelicitaciones('Felicitaciones has llegado a los 200!');
    } else {
      setMensajeFelicitaciones('');
    }
  }, [numeroSeguidores])


  function seguirUsuario() {
    // Si "siguiendo" === true, entonces setealo en false, si es false, entonces setealo a true
    if (!siguiendo) {
      setSiguiendo(true);
      onSeguidoresChange(numeroSeguidores + 1);
    } else {
      setSiguiendo(false);
      onSeguidoresChange(numeroSeguidores - 1);
    }

    // Option + Flechitas
  }
  
  return (
    <div className='account-info-container'>
      <img src={imgSrc} alt="Imagen de la cuenta" />
      <div className='user-account-and-follow-container'>
        <p>{accountInfo}</p>
        <button onClick={seguirUsuario}>{siguiendo ? 'Siguiendo' : 'Seguir'}</button>
      </div>
      <p className='seguidores'>Numero de seguidores es: { numeroSeguidores }</p>
      <p>{mensajeFelicitaciones !== '' && mensajeFelicitaciones}</p>
    </div>
  )
};

export default AccountInfo;


