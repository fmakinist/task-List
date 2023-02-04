import { useRef, useState } from 'react'
import './TaskCreate.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function TaskCreate({oncreate}) {
    const alert= useRef()
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")
    function handleClick(e){
        setTitle(e.target.value)
    

    }
    function handleTask(e){
        setTask(e.target.value)
       
    }
    function handleButton(e){
        e.preventDefault()
        if(title!==""&&task!==""){
            setTitle("")
            setTask("")
            oncreate(title,task);
            showAlert("success","Task Eklendi")
        }
        else{
            showAlert("danger","Başlık ve Task Giriniz")
        }
       
    }
    function showAlert(type,text){
              alert.current.className=`alert alert-${type}`
              alert.current.textContent=text
        setTimeout(() => {
            alert.current.className="";
            alert.current.textContent="";
        }, 2000);
    
    }


  return (
    <div className='taskCreate'>
        <div  ref={alert}></div>
        <h3>Lütfen Task Ekleyiniz</h3>
    <form className='form-group'>
        <label className=''>Başlık</label>
        <input type="text" className='form-control' onChange={handleClick} value={title}/>
        <label>Task Giriniz</label>
        <textarea className='form-control' rows={5} onChange={handleTask} value={task}/>
        <button className='btn btn-danger mt-2' onClick={handleButton}>Oluştur</button>

    </form>
    <h1 className='mt-2'>GÖREVLER</h1>
    </div>
  )
}

export default TaskCreate