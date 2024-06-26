import React from 'react'
import './SubjectOutlineleft.css'
function SubjectOutlineleft(props) {
  return (
    <div className='subjectoutlineleft'>
        {props.subject}
    <p className='data'>
        {props.data}
    </p>
    </div>
  )
}

export default SubjectOutlineleft;