import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sunt nulla quibusdam porro illum velit odio. At nemo sint eum reprehenderit accusamus consequuntur provident aliquid cupiditate neque. Quisquam, aliquam iste!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>EMPRESA</h2>
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre-nós</li>
                        <li>Delivery</li>
                        <li>Politicas de privacidade</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>ENTRE EM CONTATO</h2>
                    <ul>
                        <li>19 92435-8876</li>
                        <li>Tomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copiright 2024 © Tomato.com  - Todos os direitos reservados</p>
        </div>
    )
}

export default Footer
