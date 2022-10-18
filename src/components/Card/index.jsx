import { Link } from "react-router-dom";

export default function Card({id, title , cover , pictures , equipments}){
    return (
            <Link className="articles__box" to={id}> 
            <img className="articles__cover" src={cover} alt="" />
            <div className="articles__title">
                <p>{title}</p>
            </div>
         
            </Link>      
    )
}


