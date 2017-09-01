import React from 'react'
import SubjectAdder from './SubjectAdder'
import SubjectList from './SubjectList'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      subjects: ['hello']    
    }
    this.addSubject = this.addSubject.bind(this)
    this.removeSubject = this.removeSubject.bind(this)
  }
  addSubject(newSubject) {
    this.setState({    
      subjects: [...this.state.subjects, newSubject]
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
        < SubjectAdder addSubject={this.addSubject} />
        < hr />
        < SubjectList subjects={this.state.subjects} removeSubject={this.removeSubject} />
      </div>
    )
  }
}

export default App 
