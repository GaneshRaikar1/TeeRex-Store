import React,{useContext} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import CartContext from '../context/CartContext';
import  homeIcon  from '../images/home.svg';
import  cartIcon  from '../images/cart.svg';

function Header() {

  const location=useLocation()
  const { cart } = useContext(CartContext)

  return (
    <div className='header'>
      <h1 className='title'>
        <NavLink to={'/'}>TeeRex Store</NavLink>
      </h1>
      <div className='icon'>
          {location.pathname==='/'?
            <NavLink to={'cart'}>
              <img src={cartIcon} alt='cartIcon' height={50} width={50}/><span className='cart-count'>{cart.length}</span>
            </NavLink>
           :<NavLink to={'/'}>
              <img src={homeIcon} alt='homeIcon' height={50} width={50}/> 
            </NavLink>}
      </div>
    </div>
  );
}


export default Header;

