import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom';

const Nav = ({cart}) => {
  return (
    <nav>
      <h1><Link to="/">Home</Link></h1>
      <div><Link to="/cart"><AiOutlineShoppingCart/><span className='box'>{cart}</span></Link></div>
    </nav>
  )
}

export default Nav;
