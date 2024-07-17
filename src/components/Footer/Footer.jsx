/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import logoImg from '../../assets/logo.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <section className='footer_container'>
        <div className="logo_footer_wrap">
            <a href=""><img src={logoImg} alt="Club Logo" /></a>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid, sunt suscipit architecto adipisci temporibus.</p>
        </div>
        <div className="site_map">
            <h1>Navigation Links</h1>
            <br />
            <p><a href="">Home</a></p>
            <p><a href="">About Us</a></p>
            <p><a href="">FAQs</a></p>
        </div>
        <div className="contact_us">
            <h1>Contact Us</h1>
            <br />
            <p><FaLocationDot />  Muranga University, Room 23</p>
            <p><FaPhoneAlt />  Tel No: +254712345678</p>
            <p><MdMail />  Email Us: inquiry@bonga.com</p>
        </div>
    </section>
  )
}

export default Footer