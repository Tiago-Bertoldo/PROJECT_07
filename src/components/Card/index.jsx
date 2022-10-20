import { Link } from "react-router-dom";

export default function Card({id, title , cover , pictures , equipments}){
    return (
        <Link className="articles__box" to={id}> 
        <div className="articles__cover">
            <img className="articles__img" src={cover} alt="" />
        </div>
        <div className="articles__title">
            <p>{title}</p>
        </div>
        </Link>     
    )
}


