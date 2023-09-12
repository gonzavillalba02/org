import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai" //estamos importando el icono

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    return(
        <div className="colaborador">
            <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={foto} alt={nombre}/>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart className="corazon" onClick={() => like(id)}/>}
            </div>
        </div>
    )
}

export default Colaborador