import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo/InStock-Logo_2x.png'
import logo_big from '../../assets/Logo/InStock-Logo_2x.png'

export default function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={logo_big} alt='logo at header'></img>
        <div className='header__nav'>
            <div className='header__nav-links header__link-warehouses'>
                <button className='header__warehouses header__button header__button--active'>Warehouses</button>    
            </div>
            <div className='header__nav-links header__link-inventory'>
                <button className='header__inventory header__button header__button--active'>Inventory</button>
            </div>
        </div>
    </div>
  )
}

//dive outside of button is reserved for <Link> tags later
