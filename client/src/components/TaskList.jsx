import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <div>
      {/* {!tasks ? <p>no tasks yet</p> : <h4>{tasks.title}</h4>} */}
      {tasks.map((task) =>{
        <ul>
          <li>{task.title}</li>
          <li>{task.description}</li>
        </ul>
      })}
    </div>
  )
}

export default TaskList
