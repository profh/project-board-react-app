import React from 'react'
import CreateCard from '../components/CreateCard'
import ToDoCardContainer from './ToDoCardContainer'


export default class MainContainer extends React.Component {

  state = {
    cards: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/cards")
    .then(resp => resp.json())
    .then(cards => {
      this.setState({
        cards: cards
      })
    })
  }

  createNewCard = (input) => {
    fetch("http://localhost:3001/cards", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        title: input
      })
    })
    .then(resp => resp.json())
    .then(newCard => {
      this.setState({
        cards: [...this.state.cards, newCard]
      })
    })
  }

  addTask = (cardId, input) => {
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        description: input,
        card_id: cardId,
        completed: false
      })
    })
    .then(resp => resp.json())
    .then(newTask => {
      const foundCard = {...this.state.cards.find(card => card.id === cardId)}
      foundCard.tasks = [...foundCard.tasks, newTask]

      const newCards = this.state.cards.map(card => {
        if (card.id === cardId){
          return foundCard
        } else {
          return card
        }
      })

      this.setState({
        cards: newCards
      })

    })
  }

  handleClickTask = (cardId, taskId) => {

    const foundCard = {...this.state.cards.find(card => card.id === cardId)}
    const foundTask = foundCard.tasks.find(task => task.id === taskId)

    let newState = null

    if (foundTask.completed) {
      newState = false
    } else {
      newState = true
    }

    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        completed: newState
      })
    })
    .then(resp => resp.json())
    .then(newTask => {

      const newTasks = foundCard.tasks.map(task => {
        if (task.id === taskId){
          return newTask
        } else {
          return task
        }
      })
      foundCard.tasks = newTasks


      const newCards = this.state.cards.map(card => {
        if (card.id === cardId) {
          return foundCard
        } else {
          return card
        }
      })

      this.setState({
        cards: newCards
      })
    })
  }


  render(){
    return (
      <div className="main-container">
        <div className="row">
          <div className="col s4">
            <CreateCard createNewCard={this.createNewCard}/>
          </div>
          <div className="col s8">
            <ToDoCardContainer cards={this.state.cards} addTask={this.addTask} handleClickTask={this.handleClickTask}/>
          </div>
        </div>   
      </div>
    )
  }

}
