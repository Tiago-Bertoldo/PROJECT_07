import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function Card({id, title , cover }){
    return (
        <Link className="articles__box" to={`/logement/${id}`}> 
        <div className="articles__cover">
            <img className="articles__img" src={cover} alt="" />
        </div>
        <div className="articles__title">
            <p>{title}</p>
        </div>
        </Link>     
    )
}

//CREATION DE TOUTS LE DEFAULT PROPS //


Card.prototype = {
    id : PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string
}