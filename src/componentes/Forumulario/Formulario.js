import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo"; //no hace falta que importemos el nombre del script pq se llama index
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e)=>{
        e.preventDefault()
        let datosAEnviar = {
            nombre, //es lo mismo que poner nombre: nombre, js ya interpreta que la llave y el valor tienen el mismo nombre
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)//la mando a app.js mediante la funcion que le mande en el prop
        
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color}) //lo estoy mandando como objeto
    }

    return (

        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={setNombre}/>

                <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}/>

                <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={setFoto}/>

                <ListaOpciones 
                valor={equipo}
                actualizarEquipo={setEquipo}
                equipos={props.equipos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}/>

                <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex (#XXXXXX)" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"/>
                <Boton>Registrar equipo</Boton>
            </form>
        </section>
    )
}

export default Formulario;