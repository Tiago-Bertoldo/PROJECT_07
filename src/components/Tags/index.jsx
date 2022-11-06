import './Style/desktop.scss'
import './Style/mobile.scss'
import PropTypes from 'prop-types'
export default function Tags({tags}){
    return (
        <div className="container-tags">
           {tags.map((tagsSelect , index) =>(
                <div  className="container-tags__btn" key={index}>
                    <span>{tagsSelect}</span>
                </div>
           ))}
        </div>
    )
}

Tags.prototype = {
    tags: PropTypes.string
}