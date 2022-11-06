import { Link } from "react-router-dom";
import './Style/index.scss'
import './Style/resposive.scss'
export default function Error() {
    return(
        <section className="section">
            <h1>
                404
            </h1>
            <p>
                Oups! La page que vous demandez n'existe pas.
            </p>
           <nav>
                <ul>
                    <li>
                        <Link className="section__link" to='/'> Retourner sur la page d'accueil </Link>
                    </li>
                </ul>
           </nav>
        </section>
    )
}