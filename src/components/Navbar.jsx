import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Envelope } from 'phosphor-react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
          <h1>ShopCart</h1>
      </div>
        
        <div className='links'>
            <Link to="/"> Shop </Link>
            <Link to='/contact'> 
                <Envelope size={32} />
            </Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar