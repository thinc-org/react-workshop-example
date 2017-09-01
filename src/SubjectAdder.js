import React from 'react'

class SubjectAdder extends React.Component {
  constructor() {
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
    this.addSubject = this.addSubject.bind(this)
    this.state = {
      value: ''
    }
  }
  handleOnChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  addSubject() {
    this.props.addSubject(this.state.value)
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} value={this.state.value}></input>   
        <button onClick={this.addSubject}>Add Subject</button>
      </div>
    )
  }
}

export default SubjectAdder
