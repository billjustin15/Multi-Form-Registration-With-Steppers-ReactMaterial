import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'


export class UserForm extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        age: '',
        username: '',
        password: ''
    }

    // proceed to next step
    nextStep = () => {
        // take the 'step' out of the state using destructuring
        // we're pulling the 'step' out of the state and defining it as a variable
        const { step } = this.state
        this.setState({
            // we increment by one so that it will bring us to the next step or component
            step: step + 1
        })
    }

    // go back to last step
    previousStep = () => {
        // take the 'step' out of the state using destructuring
        // we're pulling the 'step' out of the state and defining it as a variable
        const { step } = this.state
        this.setState({
            // we increment by one so that it will bring us to the next step or component
            step: step - 1
        })
    }
    
    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        // what we want to do is to figure out what step we're on and depending on it, thats going to decide which component to display
        // destructure the step and the fields
        const { step } = this.state
        const { firstname, lastname, email, age, username, password } = this.state
        // we need to be able to pass these fields to the components as props as 'values'
        const values = { firstname, lastname, email, age, username, password }

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep = { this.nextStep }
                        previousStep = { this.previousStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 3: 
                return (
                    <Confirm
                        nextStep = { this.nextStep }
                        previousStep = { this.previousStep}
                        values = { values }
                    />
                )
            case 4:
                return <Success />
        
        }
    }
}

export default UserForm
