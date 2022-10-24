import './Style/desktop.scss'
import './Style/mobile.scss'
import { BiChevronUp } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import {useState} from 'react'


export default function Securite() {
     const [isOpen , setIsOpen] = useState(false)

    return isOpen ? (
      <div className='propos-open'>
        <div className='propos-open__box'>
           <p>
           La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
           </p>
          <div className='propos'>
          <div className='propos__box'> 
          <h3>Securité</h3>
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
          <h3>Securité</h3>
          <button onClick={()=> setIsOpen(true)}><BiChevronUp/></button>
      </div>
      </div>

      </div>
     
    </div>
    )
      
}