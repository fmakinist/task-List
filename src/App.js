import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([])

  function createTask(title, task) {
    const createdTask = [...tasks, {
      id: Math.round(Math.random() * 999999),
      title,
      task
    }];
    setTasks(createdTask)

  }

  const deleteTaskById =(id) =>{
   const afterDelete= tasks.filter((task)=>{
      return task.id!==id;
    })
    setTasks(afterDelete)
}
  return (
    <div className="App">
      <TaskCreate oncreate={createTask} />
      <TaskList tasks={tasks} Delete={deleteTaskById} />
    </div>
  );
}

export default App;
