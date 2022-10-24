import React from "react";
import './Styles/index.scss'
import './Styles/resposive.scss'
import { useState , useEffect } from "react";

export default function Backgrounds(props) {
    const [img , setImg] = useState(props.img)
    useEffect(()=> {
        return window.onresize = function(){
            let size = window.innerWidth
            if(size <= 520) {
                setImg(props.img2)
            }else {
                setImg(props.img)
            }
        }

    })

    
    return(
        <div className="background">
           <img className="background__img" src={img} alt={props.alt} />
           <h2>{props.textH2}</h2>
        </div>

    )
}