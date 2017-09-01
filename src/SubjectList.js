import React from 'react'

class SubjectList extends React.Component {
  render() {
    return (
    <ul>
      { this.props.subjects.map((subject, index) => {
        return (
          <li>
            <span>{subject}</span> 
            <button onClick={() => this.props.removeSubject(index)}>Remove Subject</button>
          </li>)
      })}
    </ul>
    )
  }
}

export default SubjectList
