// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
  return (
    <header className='container'>
      <nav>
        <section className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </section>

        <ul>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>

        <button className='btn3'>Login</button>
      </nav>
    </header>
  );
}

export default Header;