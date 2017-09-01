import React from 'react'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      subjectName: '',
      subjects: []    
    }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.addSubject = this.addSubject.bind(this)
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
  addSubject() {
    this.setState({    
      subjects: [...this.state.subjects, this.state.subjectName]
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
        <button onClick={this.addSubject}>Add Subject</button>
      </div>
      <div>
        { this.state.subjects.map(subject => {
          return <li> {subject} </li>
        })}
      </div>
      </div>
    )
  }
}

export default App 