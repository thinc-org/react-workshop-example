import React from 'react'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this)
  }
  incrementCounter() {
    this.setState({
      value: this.state.value + 1
    })
  }
  render() {
    return (
      <div>
      <div>
        <h3>{this.state.value}</h3>
        <button onClick={this.incrementCounter}>+</button>
      </div>
      <br/>
      <div>
        <input type="text"></input>   
        <button onClick={ () => {alert('Add Subject Clicked!')}}>Add Subject</button>
      </div>
      </div>
    )
  }
}

export default App 