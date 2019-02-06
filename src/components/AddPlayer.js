import React, { Component } from 'react'

export default class AddPlayer extends Component {
    state = {
        id: "",
        name: "",
        email: ""
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewPlayer(this.state)
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form style={{ margin: '10px', padding: '10px' }} onSubmit={this.handleSubmit}>
                <div>
                    <label>Player ID</label>
                    <input type="text" value={this.state.id} name={'id'} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Player Name</label>
                    <input type="text" value={this.state.name} name={'name'} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Player Email</label>
                    <input type="text" value={this.state.email} name={'email'}  onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}
