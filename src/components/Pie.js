import React from 'react'
import "../scss/_Pie.scss"


export const Pie = (props) => {
  return (
    <div>
      <h2 className='titulo_pie'> {props.titulo} </h2>
      <p className='descripcion_pie'> {props.descripcion} </p>
    </div> 
  )
}

//export default pie