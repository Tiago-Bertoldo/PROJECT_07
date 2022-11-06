import './Style/desktop.scss'
import './Style/mobile.scss'
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';
import PropTypes from 'prop-types'

export default function Carrosell( {pictures}) {
    const [current , setCurrent] = useState(0)
    const getLength = pictures.length

    // Function necessaire pour faire le defilement du carrosell Apres
    const handleNext = () => {
        setCurrent(current === getLength -1 ? 0 : current + 1);
    }
    // Function necessaire pour faire le defilement du carrosell Avant
    const handlePrev = () => {
        setCurrent(current === 0 ? getLength - 1 : current - 1 )
    }
    return  getLength === 1 ? (
        <div className="carrosell">
         {/* //SET CARROSSEL IMG */}
            {pictures.map((imgSelect , index) => (
             <div key={index}>
                {index === current && (
                <img src={imgSelect} alt="carrosell imagem" className='carrosell__img'></img>)
            }
            </div>
            ))}
            <div className='carrosell__number'>
                {`${current +1}/${getLength}`}
            </div>
        </div>
    ) : (
        <div className="carrosell">
         {/* //SET CARROSSEL IMG */}
            {pictures.map((imgSelect , index) => (
             <div key={index}>
                {index === current && (
                <img src={imgSelect} alt="carrosell imagem" className='carrosell__img'></img>)
            } 
            </div>
            ))}
            <div className='carrosell__fleches'>
                <span>
                    <button onClick={handlePrev}><BiChevronLeft/></button>
                </span>
                <span>
                    <button onClick={handleNext}><BiChevronRight/></button>
                </span>
            </div>
            <div className='carrosell__number'>
                {`${current +1}/${getLength}`}
            </div>
        </div>
    )
}


/**
 * CREATION DE TOUTS LE DEFAULT PROPS
 */
Carrosell.prototype = {
    pictures: PropTypes.string
}