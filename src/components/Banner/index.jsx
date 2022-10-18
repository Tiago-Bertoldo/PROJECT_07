import logo from "./assets/LOGO.svg";
import './Styles/desktop.scss'
import './Styles/mobile.scss'
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";



export default function Banner(){
    const [accueil , setAccuiel] = useState('Accueil')
    const [propos , setPropos] = useState('A Propos')
    
    useEffect(()=> {
        window.onresize = function(){
            let size = window.innerWidth
            if(size <= 720) {
                setAccuiel('ACCUEIL')
                setPropos('A PROPOS')
            }else {
                setAccuiel('Accueil')
                setPropos('A Propos')
            }
        }
    },[])
    

    return(
        <div className="container">
            <div className="container__nav">
            <img className="logo" src={logo} alt="La Kasa logo"/>
                <div className="container__menu">
                <ul>
                    <li>
                        <Link className="container__link" to='/'> {accueil}</Link>
                    </li>
                    <li>
                        <Link className="container__link" to='/propos'>{propos} </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        
    )
}