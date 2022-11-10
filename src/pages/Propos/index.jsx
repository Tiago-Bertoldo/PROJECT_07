import Backgrounds from "../../components/Backgrounds";
import Collapse from "../../components/Collapse";
import imgBack from './assets/img2.png';
import imgBackMobile from './assets/img3-mobile.png';
import './Style/desktop.scss';
import './Style/responsive.scss';

export default function Propos(){
    /**
     * text Fiabilite
     */
    const fiabilite = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' ;
    /**
     * text Respect
     */
    const respect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
     /**
     * text Service
     */
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
     /**
     * text Securite
     */
    const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <div className="Container">
            <section className="img-responsive">
                <Backgrounds img = {imgBackMobile} alt = {'background Propos'}/>
            </section>
            <section className="img">
                <Backgrounds img = {imgBack} alt = {'background Propos'}/>
            </section>
            <section>
                <Collapse title = {'Fiabilité'} text = {fiabilite} />
                <Collapse title = {'Respect'} text = {respect} />
                <Collapse title = {'Service'} text = {service} />
                <Collapse title = {'Sécurité'} text = {securite} />

            </section>
     </div>
    )
}