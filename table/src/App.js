import React, { Component } from 'react'
import UserForm from './steppers/UserForm'

export class App extends Component {
  state = {
      firstname: '',
      lastname: '',
      email: '',
      age: '',
      username: '',
      password: ''
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { firstname, lastname, email, age, username, password } = this.state
    // we need to be able to pass these fields to the components as props as 'values'
    const values = { firstname, lastname, email, age, username, password }

    return (
      <div>
        <UserForm handleChange={ this.handleChange } values={ values }/>
      </div>
    )
  }
}

export default App
