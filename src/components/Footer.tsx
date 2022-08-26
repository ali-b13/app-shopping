import React from 'react'
import { Button } from '@mui/material'
import './css/footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container-footer'>
    <NavLink style={{'textDecoration':"none"}} to={'/'}><Button variant='outlined' className='btn-to-top'> Back to Main </Button></NavLink>  
    <div className='things-we-offer'>
   <ul className='parent-ul'>
    <ul> Get to Know Us
    <li>About Us</li>
    <li>Careers</li>
    <li>Press Releases</li>
    </ul>

    <ul> Connect with Us
    <li>Facebook</li>
    <li>Twitter</li>
    <li>Instagram</li>
    </ul>
  
    <ul> Services
    <li>delivery</li>
    <li>Affordable Prices</li>
    <li>Essay To Get</li>
    </ul>
  

   </ul>
    </div>
    <div className='copy-right'>
   <span className='developer'>   Made With ♥  By Ali Developer</span>
   <div>Copy Right ©  2022 are reserved </div>
    </div>
    </div>
  )
}

export default Footer