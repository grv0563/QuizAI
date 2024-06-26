import React from 'react'
import  './SubjectOutline.css'

function SubjectOutline(props) {
  return (
    <div className='subjectoutline'  > 
    {props.subject}
    <p className='data'>
        {props.data}
    </p>
    </div>
  )
}

export default SubjectOutline