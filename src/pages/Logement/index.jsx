import { useParams } from "react-router-dom"
import Carrosell from "../../components/Carrosell"
import { appartDispo } from "../../date"
import './Style/mobile.scss'
import './Style/desktop.scss'

export default function Logement() {
    const {idNumber} = useParams()
    return(
        <div className="container-logement">
            
            {appartDispo.map((values)=> (
                values.id === idNumber ? (<Carrosell pictures= {values.pictures}id={values.id} key={values.id}/>) : null
            ))}

        </div>
    
    )
}

<div>
  
</div>