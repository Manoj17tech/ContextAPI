import React from 'react'
import ClassComponent from './ClassComponent'

function College() {
  return (
    <div className='College' style={{backgroundColor:'yellow',padding:10}}>
        <h1>College Component</h1>
        <ClassComponent/>
    </div>
  )
}

export default College