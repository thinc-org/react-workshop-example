import React from 'react'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      subjectName: ''
    }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  incrementCounter() {
    this.setState({
      value: this.state.value + 1
    })
  }
  handleOnChange(event) {
    this.setState({
      subjectName: event.target.value
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
        <input type="text" onChange={this.handleOnChange}></input>   
        <button onClick={ () => {alert('Add Subject Clicked!')}}>Add Subject</button>
      </div>
      </div>
    )
  }
}

export default App 