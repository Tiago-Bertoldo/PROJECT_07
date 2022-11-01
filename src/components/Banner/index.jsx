import logo from "./assets/LOGO.svg";
import './Styles/desktop.scss'
import './Styles/mobile.scss'
import { Link } from "react-router-dom";

export default function Banner(){

    return(
        <div className="container">
            <div className="container__nav">
            <Link to='/'>
                <img className="logo" src={logo} alt="La Kasa logo"/>
            </Link>
                <div className="container__menu">
                <ul className="resposive-menu">
                    <li>
                        <Link className="container__link " to='/'> ACCUEIL</Link>
                    </li>
                    <li>
                        <Link className="container__link " to='/propos/'>A PROPOS </Link>
                    </li>
                </ul>
                <ul className="menu-nav">
                    <li>
                        <Link className="container__link" to='/'>Accueil</Link>
                    </li>
                    <li>
                        <Link className="container__link" to='/propos/'> A Propos</Link>
                    </li>
                </ul>
               
                </div>
            </div>
        </div>
        
    )
}