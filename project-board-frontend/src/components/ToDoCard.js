import React from 'react'
import ToDoList from './ToDoList'

class ToDoCard extends React.Component {

  state = {
    input: ''
  }

  handleTaskInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleTaskSubmit = (event) => {
    event.preventDefault()
    this.props.addTask(this.props.card.id, this.state.input)
    this.setState({
      input: ''
    })
  }

  renderTasks(){
    return this.props.card.tasks.map(task => {
      return <ToDoList key={task.id} handleClickTask={this.props.handleClickTask} cardId={this.props.card.id} task={task}/>
    })
  }

  render(){
    return (
      <div className="to-do-card">
        <div className="card">
        <h5>{this.props.card.title}</h5>
        {this.renderTasks()}
        <form onSubmit={this.handleTaskSubmit}>
          <input onChange={this.handleTaskInput} type="text" value ={this.state.input} />
        </form>
        
        </div>

      </div>
    )
  }
}


export default ToDoCard