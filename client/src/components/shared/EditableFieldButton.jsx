import React from 'react'
import CaretRight from './icons/CaretRight'

const EditableFieldButton = props =>
  <button className='w-100 cf pa3 button bg-white bw0' onClick={props.onClick}>
    <span className='fl cf'>
      <span className='fl ttu f3 h2 pa1'> {props.label} </span>
    </span>
    <CaretRight className='fr w2 h2 pa1'/>
  </button>


export default EditableFieldButton
