import React from 'react'

// const About = (props) => {
//   let mensaje = props.mensaje
//   return (
//     <div>
//       <h1>{mensaje}</h1>
//       <h2>{props.mensajeDos}</h2>
//     </div>
//   )
// }

const About = ({mensaje, mensajeDos}) => {
  // {mensaje, mensajeDos}
  //const {mensaje, mensajeDos} = props
  return (
    <div>
      <h1>{mensaje}</h1>
      <h2>{mensajeDos}</h2>
    </div>
  )
}

export default About