import React from 'react'

const ToDoList = (props) => {

  function handleClick (event) {
    event.preventDefault()
    props.handleClickTask(props.cardId, props.task.id)
  }

  return (
    <div onClick={handleClick} className="to-do-list-container">
      <h6 className={props.task.completed ? "completed-list" : "to-do-list"}>{props.task.description}{props.task.completed ? "  ✔️" : null}</h6>
    </div>
  )
}


export default ToDoList