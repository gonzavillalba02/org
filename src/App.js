import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Forumulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores , actualizarColaboradores] = useState([//lo inicializamos como un arreglo vacio si es que queremos que no aparezca nada, o con datos si queremos que a penas se recargue la pagina se cree
  {
    id: uuid(),
    nombre: "Gonzalo Emiliano Villalba",
    puesto: "Programados Junior",
    foto: "https://github.com/gonzavillalba02.png",
    equipo: "Front-End",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Gonzalo Emiliano Villalba",
    puesto: "Programados Junior",
    foto: "https://github.com/gonzavillalba02.png",
    equipo: "Programación",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Gonzalo Emiliano Villalba",
    puesto: "Programados Junior",
    foto: "https://github.com/gonzavillalba02.png",
    equipo: "Data Science",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Harland Lohora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front-End",
    fav: true,
  },
  ]) 
  const [equipos, actualizarEquipos] = useState([
    {id: uuid(),
     titulo: "Programación",
     colorPrimario: "#57C278",
     colorSecundario: "#D9F7E9"},

     {id: uuid(),
     titulo: "Front-End",
     colorPrimario: "#82CFFA",
     colorSecundario: "#E8F8FF"},

     {id: uuid(),
     titulo: "Data Science",
     colorPrimario: "#A6D157",
     colorSecundario: "#F0F8E2"},

     {id: uuid(),
     titulo: "Devops",
     colorPrimario: "#E06B69",
     colorSecundario: "#FDE7E8"},

     {id: uuid(),
     titulo: "UX y Diseño",
     colorPrimario: "#DB6EBF",
     colorSecundario: "#FAE9F5"},

     {id: uuid(),
     titulo: "Móvil",
     colorPrimario: "#FFBA05",
     colorSecundario: "#FFF5D9"},

     {id: uuid(),
     titulo: "Innovación y Gestión",
     colorPrimario: "#FF8A29",
     colorSecundario: "#FFEEDF"}
])

  //Ternario --> condicion ? seMuestra : noSeMuestra (es masomeno como un if que sie s verdadero se muestra lo primero y si es falso lo otro)
  // condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    //Spread operator -> toma los valores actuales de colaboradores y le agrega el nuevo colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id == id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }
  


  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></> */}
      {/*mostrarFormulario ? <Formulario /> : <></> */}
      { mostrarFormulario && <Formulario 
      equipos={equipos.map( (equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo = {crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => 
          <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          //aca estoy filtrando para que solo me muestre en aquellos lugares donde el titulo de la seccion sea igual al equipo del colaborador
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like={like}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App
