import './Style/desktop.scss'
import './Style/mobile.scss'
import { BiChevronUp } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import {useState} from 'react'


export default function Fiabilite() {
   const [isOpen , setIsOpen] = useState(false)

    return isOpen ? (
      <div className='propos-open'>
        <div className='propos-open__box'>
           <p>
           Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
           </p>
          <div className='propos'>
            <div className='propos__box'> 
            <h3>Fiabilité</h3>
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
          <h3>Fiabilité</h3>
          <button onClick={()=> setIsOpen(true)}><BiChevronUp/></button>
      </div>
      </div>

      </div>
     
    </div>
    )
      
}