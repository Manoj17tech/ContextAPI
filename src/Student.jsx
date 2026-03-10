import React from 'react'
import Subject from './Subject'

function Student() {
  return (
    <div className='Student' style={{backgroundColor:'skyblue',padding:10}}>
        <h1>Student Component</h1>
        <Subject/>
    </div>
  )
}

export default Student