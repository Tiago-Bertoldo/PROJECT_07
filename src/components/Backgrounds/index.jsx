import React from "react";
import './Styles/index.scss'
import './Styles/resposive.scss'

export default function Backgrounds(props) {

    return(
        <div>
        <div className="background">
           <img className="background__img" src={props.img} alt={props.alt} />
           <h2>{props.textH2}</h2>
        </div>
        
        </div>

    )
}