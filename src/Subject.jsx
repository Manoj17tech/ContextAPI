import React, { useContext } from 'react'
import { subjectContext } from './ContextData'

function Subject() {
    const subject = useContext(subjectContext)
  return (
    <div className='Subject' style={{backgroundColor:'violet'}}>
        <h1>Subject is: {subject}</h1>
    </div>
  )
}

export default Subject