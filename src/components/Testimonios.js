import React from 'react'
import '../scss/_Testimonios.scss'

//TRABAJO CON COMPONENTES FUNCIONALES
export const Testimonios = (props) => {
  return (
    <div className='container'>

      <div className='container_box'>
        <figure className='container_box_left'>
          <img className ='container_box_left_image' 
              src = {require(`../imagenes/testimonio-${props.imagen}.jpg`)} 
              alt = 'imagen1'
          />
        </figure>

        <div className='container_box_right'>
          <p className='container_box_right_nombre'>{props.nombre} en {props.pais}</p>
          <p className='container_box_right_cargo'>{props.cargo} en {props.empresa}</p>
          <p className='container_box_right_testimonio'>{props.testimonio}</p>
        </div>   
      </div>
      
    </div>
  )
}

//export default Testimonios