import './Style/desktop.scss'
import './Style/mobile.scss'
import { BiChevronUp } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import {useState} from 'react'


export default function Respect() {
     const [isOpen , setIsOpen] = useState(false)

    return isOpen ? (
      <div className='propos-open'>
        <div className='propos-open__box'>
           <p>
           La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
           </p>
          <div className='propos'>
          <div className='propos__box'> 
          <h3>Respect</h3>
          <button onClick={()=> setIsOpen(false)}><BiChevronDown/></button>
      </div>
        </div>
        </div>
      </div>
    ): (
      <div className='propos-close'>
      <div className='propos-close__box'>
        <div className='propos'>
          <div className='propos__box'> 
          <h3>Respect</h3>
          <button onClick={()=> setIsOpen(true)}><BiChevronUp/></button>
      </div>
      </div>

      </div>
     
    </div>
    )
      
}