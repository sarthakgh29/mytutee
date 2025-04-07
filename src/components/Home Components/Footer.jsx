import React from 'react'
import logo from "../../assets/images/mytuteeLogo.png";
import './Footer.css'

export const Footer = () => {
  return (
    <div className="Footer">
        <ul>
            <li><h3>query@mytutee.com</h3></li>
            <li><img src={logo} alt="Mytutee Logo" className="FooterLogo" /></li>
            <li><h3>+91 99103 44403</h3></li>
        </ul>
    </div>
  )
}