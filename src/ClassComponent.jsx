import React from 'react'
import Student from './Student'

function ClassComponent() {
  return (
    <div className='ClassComponent' style={{backgroundColor:'red',padding:10}}>
        <h1>Class Component</h1>
        <Student/>
    </div>
  )
}

export default ClassComponent