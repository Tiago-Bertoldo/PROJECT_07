import { useParams } from "react-router-dom"
import Carrosell from "../../components/Carrosell"
import HyperTags from '../../components/Tags'
import { appartDispo } from "../../date"
import Collapse from "../../components/Collapse";
import Error from "../../components/Error";
import ReactStars from "react-rating-stars-component";


import './Style/mobile.scss'
import './Style/desktop.scss'


export default function Logement() {
    const {idNumber} = useParams()
    let hunterState = false;
    appartDispo.forEach(element => {
        if(element.id === idNumber) {
            hunterState = true
        }
    });

    return(
        <div className="container-logement">
            {hunterState ? (
                <div className="container-carrosell">
                    {appartDispo.map((values , index )=> (
                     values.id === idNumber ? (
                        <div key={index}>
                            <Carrosell pictures= {values.pictures}id={values.id} key={index}/>
                        </div>
                    ) : null
                ))}
            <div className="container-box">
                    <div className="container-box__right">
                        {appartDispo.map((values, index) => (
                            values.id === idNumber ? (
                            <div key={values.id}>
                                <h1>{values.title}</h1>
                                <p>{values.location}</p>
                                <HyperTags  tags= {values.tags}  key={values.id}/>
                            </div>
                            ) : null
                        ))}
            </div>
            <div className="container-box__left">
                        {appartDispo.map((values, index) => (
                            values.id === idNumber ? (
                            <div className="container-box__hosting" key={values.id}>
                            <div className="hosting-host">
                                <p>{values.host.name}</p>
                            </div>
                            
                            <div className="hosting-picture">
                                <img src={values.host.picture} alt="Host pictures wallpaper" />
                            </div>
                        </div>        
                                ) : null
                            ))}
                <div>
                        {appartDispo.map((values, index) => (
                            values.id === idNumber ? (
                            <div className='container-box__rating' key={values.id}>
                                    <ReactStars
                                                        count={5}
                                                        size={35}
                                                        value ={Number(values.rating)}
                                                        edit = {false}
                                                        activeColor = {'#FF6060'}
                                        />
                            </div>
                            ) : null
                        ))}
                </div>
                </div>          
            </div>
                
                
                
                
                
                
            <div className="container-collapse">
                    <div >
                     {appartDispo.map((values, index) => (
                            values.id === idNumber ? (
                            <div className="container-collapse__box" key={values.id}>
                                <div>
                                    <Collapse title = {'Description'} text = {values.description}/>
                                </div>
                           <div>
                            <Collapse title = {'Équipements'} text = {
                                                <span className="container-logement__list">
                                                    {values.equipments.map((number , index) =>
                                                        <li key={index} >{number}</li>
                                                    )}
                                                </span>} />
                            </div>
                        </div>        
                                ) : null
                            ))}  
                    </div>
                </div>
        </div>
            ):(<Error/>)}
       
        </div>
    
        )
    }


