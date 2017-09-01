import React from 'react'

class SubjectList extends React.Component {
    render() {
        return (
            <ul className="list-group">
            { 
                this.props.subjects.map((subject, index) => {
                    return (
                        <li className="list-group-item container">
                            <button className="btn btn-sm btn-danger" onClick={() => this.props.removeSubject(index)}>x</button>
                            <span className="col">{subject}</span> 
                        </li>
                    )
                })
            }
          </ul>
        )
    }
}

export default SubjectList