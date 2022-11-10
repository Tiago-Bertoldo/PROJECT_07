import logo from "./assets/logo.png";
import './Style/desktop.scss';
import './Style/mobile.scss';

export default function Footer() {
    const alt = 'Image footer Kasa'
    return (
        <div className='footer'>
            <div className='footer__img'>
                <img src={logo} alt={alt} />
            </div>
            <div className='footer__text'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}