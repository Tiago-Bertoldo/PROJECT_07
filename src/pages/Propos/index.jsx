import Backgrounds from "../../components/Backgrounds";
import imgBack from './assets/img2.png';
import imgBackMobile from './assets/img3-mobile.png'
import Fiabilite from "../../components/Boxers/Fiabilite";
import Respect from "../../components/Boxers/Respect";
import Service from '../../components/Boxers/Service';
import Securite from '../../components/Boxers/Securite';


export default function Propos(){
    return (
        <div className="Container">
            <header className="teste">
                <Backgrounds img = {imgBack} img2 = {imgBackMobile} alt = {'background Propos'}/>
            </header>
            <section>
                <Fiabilite/>
                <Respect/>
                <Service/>
                <Securite/>
            </section>
     </div>
    )
}