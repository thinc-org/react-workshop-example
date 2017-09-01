import React from 'react'

class SubjectAdder extends React.Component {
    constructor() {
        super()
        this.state = {
            subjectName: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnChange(event) {
        this.setState({
          subjectName: event.target.value
        })
    }
    handleOnClick() {
        this.props.addSubject(this.state.subjectName)
        this.setState({
            subjectName: ''
        })
    }

    render() {
        return (
          <div className="container">
            <h1>Welcome {this.props.name}, congrats on winning the war!</h1>
            <div className="input-group">
                <input className="form-control" type="text" onChange={this.handleOnChange} value={this.state.subjectName}></input>   
                <span className="input-group-btn">
                    <button className="btn btn-primary" onClick={this.handleOnClick}>Add Subject</button>
                </span>
            </div>
          </div>
        )
    }
}

export default SubjectAdder