import React from 'react'

class CreateCard extends React.Component {

  state = {
    input: ''
  }

  handleInput = (event) => {
    event.persist()   // allows us to reference the event to grab its associated values and methods inside the function
    this.setState({
      input: event.target.value
    })
  }

  handleNewCard = (event) => {
    event.preventDefault()
    this.props.createNewCard(this.state.input)
  }

  render(){
    return (

          <div className="card blue">
            <span className="card-title">Add New Cards</span>
            <div className="card-content">
              <p>What card do you want to add:</p>
            </div>

            <form onSubmit={this.handleNewCard} className="new-card-form">
              <input onChange={this.handleInput} className="new-card-input" type="text" value={this.state.input} />
              <input className="new-card-input waves-effect waves-light btn" type="submit" value="Create" />
            </form>

          </div>

    )
  }
}

export default CreateCard;