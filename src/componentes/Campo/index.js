import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value) //estoy actualizando el valor de los useState de Formulario.js
    }

    const { type = "text" } = props //le estoy pasando el valor por defecto en caso de que sea undefined

    return(
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
            placeholder={props.placeholder + "..."} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
            />
        </div>
    )
}

export default Campo;