import React from 'react'
import SubjectAdder from './SubjectAdder'
import SubjectList from './SubjectList'

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
      subjects: [...this.state.subjects, this.state.subjectName],
      subjectName: ''
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
        < SubjectAdder handleOnChange={this.handleOnChange} addSubject={this.addSubject} value={this.state.subjectName} />
        < hr />
        < SubjectList subjects={this.state.subjects} removeSubject={this.removeSubject} />
      </div>
    )
  }
}

export default App 
