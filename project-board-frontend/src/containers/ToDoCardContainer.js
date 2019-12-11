import React from 'react'
import ToDoCard from '../components/ToDoCard'

function ToDoCardContainer(props){

  function renderCards(){
    return props.cards.map(card => {
      return <ToDoCard key={card.id} handleClickTask={props.handleClickTask} addTask={props.addTask} card={card}/>
    })
  }

  return (
    <div>
      {renderCards()}
    </div>
  )
}

export default ToDoCardContainer;
