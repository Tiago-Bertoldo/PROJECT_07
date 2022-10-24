import './Style/desktop.scss'
import './Style/mobile.scss'
import { BiChevronUp } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import {useState} from 'react'


export default function Service() {
     const [isOpen , setIsOpen] = useState(false)

    return isOpen ? (
      <div className='propos-open'>
        <div className='propos-open__box'>
           <p>
           Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
           </p>
          <div className='propos'>
          <div className='propos__box'> 
          <h3>Service</h3>
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
          <h3>Service</h3>
          <button onClick={()=> setIsOpen(true)}><BiChevronUp/></button>
      </div>
      </div>

      </div>
     
    </div>
    )
      
}