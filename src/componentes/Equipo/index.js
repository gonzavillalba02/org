import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    //Destructuracion
    const {colorPrimario, colorSecundario, titulo, id} = props.datos //es para no tener que poner props.datos.colorPrimario cada vez
    //O sea le estoy diciendo que colorPrimario es props.datos.colorPrimario
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const estiloTitulo = {borderColor: colorPrimario}

    const estiloSection = {backgroundColor: hexToRgba(colorPrimario, 0.6)}

    return <>
    { colaboradores.length > 0 && //solamente me devuelve el elemento si tiene algun colaborador
        <section className="equipo" style={estiloSection}>
            <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => actualizarColor(e.target.value, id)}
            />
            <h3 style={estiloTitulo}>
                {titulo}
            </h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) =>
                        <Colaborador 
                        datos = {colaborador}
                        colorPrimario = {colorPrimario}
                        eliminarColaborador = {eliminarColaborador}
                        key = {index}
                        like={like}
                        />
                    )
                }
            </div>
        </section>
        }
        </>

}

export default Equipo