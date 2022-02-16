import React from 'react'
import '../style/Nav.css'

const Nav = () => {
  return (
    <div className='navSection'>
        <div className='container'>
            <nav>
                <div className='logo'>
                  <a href='./'><img src='https://i.ibb.co/ZGwNbyr/logo.png' className='logoImg' alt='logo' /></a>
                </div>

                <ul className='navlink__Group'>
                  <li>
                      <a className='nav-link font-medium' href='#story'> Our Story </a>
                  </li>
                  <li>
                      <a className='nav-link font-medium' href='#product'> Our Product </a>
                  </li>
                  <li>
                      <a className='nav-link font-medium' href='#mission'> Mission </a>
                  </li>
                  <li>
                      <a className='nav-link font-medium' href='#contact'> Contact </a>
                  </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Nav