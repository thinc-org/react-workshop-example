import React from 'react'

import SubjectAdder from './SubjectAdder'
import SubjectList from './SubjectList'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      subjects: []    
    }
    this.addSubject = this.addSubject.bind(this)
    this.removeSubject = this.removeSubject.bind(this)
  }
  addSubject(subjectName) {
    this.setState({    
      subjects: [...this.state.subjects, subjectName]
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
      <div className="container">
        <div className="container">        
          <SubjectAdder name="naisk133" addSubject={this.addSubject}/>
        </div>
        <hr />
        <div className="container">
          <SubjectList subjects={this.state.subjects} removeSubject={this.removeSubject}/>
        </div>
      </div>
    )
  }
}

export default App 