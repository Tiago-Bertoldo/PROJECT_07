import './Style/desktop.scss'
import './Style/mobile.scss'
import logo from "./assets/logo.png";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__img'>
                <img src={logo} alt="" />
            </div>
            <div className='footer__text'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}