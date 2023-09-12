import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState 
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorIncial)
    //const [mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () => {
    //    actualizarMostrar(!mostrar) //lo que nosotros pongamos dentro de estos parentesis va a ser el valor que va a tomar el estado
    //} //el actualizar Mostrar esta tomando la negacion de mostrar, o sea es como un lichtschalter (dea se hacia el que sabia aleman)

    return(
        <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img src="/img/Botão-add-01-1.png" alt="add" onClick={props.cambiarMostrar}/>
        </section>
    )
}

export default MiOrg