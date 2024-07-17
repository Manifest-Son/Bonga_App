// eslint-disable-next-line no-unused-vars
import React from 'react'
import logoImg from '../../assets/logo.jpeg'
import "./Header.css"

function Header() {
  return (
    <section className="header_container">
        <div className="header_wrapper">
            <a href="#"><img src={logoImg} alt="Club Logo" /></a>
            <div className="right_header">
                <ol className="nav_links">
                    <li><nav>Home</nav></li>
                    <li><nav>About</nav></li>
                </ol>
                <button className="login">Log In</button>
                <button className="login">Sign In</button>
            </div>
        </div>
    </section>
  )
}

export default Header;