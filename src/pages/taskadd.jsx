import React, {useState} from 'react'
import Tasks from './tasks'

export default function TaskAdd() {
    const [taskList, setTaskList] = useState([])

    const handleRemove = (event) => {
        event.target.parentElement.remove();
    }
    const handleAddTask = () => {
        setTaskList(taskList.concat(<Tasks key={taskList.length } handleRemove = {handleRemove}/>))
    }

  return (
    <div>
      <main>
        {taskList}
      <button id='addTaskBtn' onClick={handleAddTask}>+</button>
      </main>
    </div>
  )
}