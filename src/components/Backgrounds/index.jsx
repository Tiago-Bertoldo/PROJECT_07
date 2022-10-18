import React from "react";
import './Styles/index.scss'
import './Styles/resposive.scss'

export default function Backgrounds(props) {
    return(
        <div className="background">
           <img className="background__img" src={props.img} alt="" />
           <h2>Chez vous, partout et ailleurs</h2>
        </div>

    )
}