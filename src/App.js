import React from 'react'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      subjectName: '',
      subjects: []    
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.addSubject = this.addSubject.bind(this)
    this.removeSubject = this.removeSubject.bind(this)
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
  removeSubject(index) {
    let newSubjects = [...this.state.subjects]
    newSubjects.splice(index, 1)
    this.setState({
      subjects: newSubjects
    })
  }
  render() {
    return (
      <div>
      <div>
        <input type="text" onChange={this.handleOnChange}></input>   
        <button onClick={this.addSubject}>Add Subject</button>
      </div>
      <div>
        { this.state.subjects.map((subject, index) => {
          return (
            <li>
              <span>{subject}</span> 
              <button onClick={() => this.removeSubject(index)}>Remove Subject</button>
            </li>)
        })}
      </div>
      </div>
    )
  }
}

export default App 
