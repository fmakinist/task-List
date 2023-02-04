import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskShow.css'


function TaskShow({task}) {
    console.log(task)
  return (
    <div className='card'>
        <h3 className='card-header'>{task.title}</h3>
        <div className='card-body'>{task.task}</div>
    </div>
  )
}

export default TaskShow