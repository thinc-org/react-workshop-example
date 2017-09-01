import React from 'react'

class SubjectAdder extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange}></input>   
        <button onClick={this.addSubject}>Add Subject</button>
      </div>
    )
  }
}

export default SubjectAdder
