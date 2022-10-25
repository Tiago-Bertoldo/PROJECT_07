import './Style/desktop.scss'
import './Style/mobile.scss'
import { BiChevronUp } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import {useState} from 'react'


export default function Fiabilite({text , title}) {
   const [isOpen , setIsOpen] = useState(false)

    return isOpen ? (
      <div className='propos-open'>
        <div className='propos-open__box'>
           <p>
            {text}
           </p>
          <div className='propos'>
            <div className='propos__box'> 
            <h3>{title}</h3>
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
          <h3>{title}</h3>
          <button onClick={()=> setIsOpen(true)}><BiChevronUp/></button>
      </div>
      </div>

      </div>
     
    </div>
    )
      
}