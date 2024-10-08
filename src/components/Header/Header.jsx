import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo/InStock-Logo_2x.png'

export default function Header() {
  return (
    <div className='Header'>
        <img className='Header__logo' src={logo} alt='logo at header'></img>
        <div className='Header__nav'>
            <button className='Header__warehouses Header__wareghouses--active Header__button'>Warehouses</button>
            <button className='Header__inventory Header__inventory--active Header__button'>Inventory</button>
        </div>
    </div>
  )
}
