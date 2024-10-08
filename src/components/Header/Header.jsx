import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo/InStock-Logo_2x.png'
import logo_big from '../../assets/Logo/InStock-Logo_2x.png'

export default function Header() {
  return (
    <div className='Header'>
        <img className='Header__logo' src={logo_big} alt='logo at header'></img>
        <div className='Header__nav'>
            <div className='Header__nav-links Header__link-warehouses'>
                <button className='Header__warehouses Header__button Header__button--active'>Warehouses</button>    
            </div>
            <div className='Header__nav-links Header__link-inventory'>
                <button className='Header__inventory Header__button Header__button--active'>Inventory</button>
            </div>
        </div>
    </div>
  )
}

//dive outside of button is reserved for <Link> tags later
