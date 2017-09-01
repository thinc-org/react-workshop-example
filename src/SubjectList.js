import React from 'react'

class SubjectList extends React.Component {
  render() {
    return (
    <ul>
      { this.props.subjects.map((subject, index) => {
        return (
          <li>
            <span>{subject}</span> 
            <button onClick={() => this.props.removeSubject(index)}>x</button>
          </li>)
      })}
    </ul>
    )
  }
}

export default SubjectList
