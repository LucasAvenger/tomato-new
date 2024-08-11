import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
//dentro da div img é repassado um "src" referente a imagem .logo .profile
const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt='' />
            <img className='profile' src={assets.profile_image} alt="" />
        </div>
    )
}

export default Navbar
