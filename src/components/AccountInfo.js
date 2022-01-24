

import React from 'react';

import './AccountInfo.css';


function AccountInfo({ imgSrc, accountInfo, numeroSeguidores}) {
  return (
    <div className='account-info-container'>
      <img src={imgSrc} alt="Imagen de la cuenta" />
      <p>{accountInfo}</p>
      <p className='seguidores'>Numero de seguidores es: { numeroSeguidores }</p>
    </div>
  )
};

export default AccountInfo;


