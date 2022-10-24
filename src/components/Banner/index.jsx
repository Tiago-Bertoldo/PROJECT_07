import logo from "./assets/LOGO.svg";
import './Styles/desktop.scss'
import './Styles/mobile.scss'
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";

export default function Banner(){
    const [accueil , setAccuiel] = useState('Accueil')
    const [propos , setPropos] = useState('A Propos')
    const [size , setSize ] = useState(0)

    useEffect(()=> {
           window.onresize = function(){
            setSize(window.innerWidth)
            if(size <= 720) {
                setAccuiel('ACCUEIL')
                setPropos('A PROPOS')
            }else {
                console.log('Teste')
                setAccuiel('Accueil')
                setPropos('A Propos')
            }
        }
    })

    

    return(
        <div className="container">
            <div className="container__nav">
            <Link to='/'>
                <img className="logo" src={logo} alt="La Kasa logo"/>
            </Link>
                <div className="container__menu">
                <ul>
                    <li>
                        <Link className="container__link" to='/'> {accueil}</Link>
                    </li>
                    <li>
                        <Link className="container__link" to='/propos/'>{propos} </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        
    )
}