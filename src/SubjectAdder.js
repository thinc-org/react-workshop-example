import React from 'react'

class SubjectAdder extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.handleOnChange} value={this.props.value}></input>   
        <button onClick={this.props.addSubject}>Add Subject</button>
      </div>
    )
  }
}

export default SubjectAdder
