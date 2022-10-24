import { useParams } from "react-router-dom"
export default function Logement() {
    const {idNumber} = useParams()
    return(
       <h2>{idNumber}</h2>
    )
}