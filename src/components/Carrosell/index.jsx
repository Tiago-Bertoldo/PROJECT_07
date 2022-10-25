import './Style/desktop.scss'
import './Style/mobile.scss'
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';



export default function Carrosell( {id , pictures}) {
    const [current , setCurrent] = useState(0)
    const getLength = pictures.length

    const next = () => {
        setCurrent(current === getLength -1 ? 0 : current + 1);
    }
    const prev = () => {
        setCurrent(current === 0 ? getLength - 1 : current - 1 )
    }

    return (
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
                    <button onClick={prev}><BiChevronLeft/></button>
                </span>
                <span>
                    <button onClick={next}><BiChevronRight/></button>
                </span>
            </div>
            <div className='carrosell__number'>
                {`${current +1}/${getLength}`}
            </div>
        </div>
    )
}