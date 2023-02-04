import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskList.css'


function TaskList({tasks,Delete}) {
  return (
    <div className='container'>
       {tasks.map((task,index)=>{
       return(
        <div className='card' key={index}>
        <h3 className='card-header'>{task.title}</h3>
        <div className='card-body'>{task.task}</div>
       
        <button className='btn btn-success form-control'  onClick={()=>{
            Delete(task.id)
        }}>Sil</button>
        
        </div>
   
       )
       })}
    </div>
    
  )
}

export default TaskList