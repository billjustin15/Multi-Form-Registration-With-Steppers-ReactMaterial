import React, { Component, Fragment } from 'react'
import { AppBar, TextField, Button, Toolbar, Typography } from '@material-ui/core/'


export class FormAccountDetails extends Component {
    render() {
        
        // destructing 'values' from the props so that we can use it as a variable
        const { values, handleChange } = this.props
        return (
            <Fragment>
                <TextField
                    label="Email"
                    type="text"
                    margin="normal"
                    onChange = { handleChange('email')}
                    defaultValue = { values.email }
                />
                <br />
                <TextField
                    label="Username"
                    type="text"
                    margin="normal"
                    onChange = { handleChange('username')}
                    defaultValue = { values.username }
                />
                <br />
                <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    onChange = { handleChange('password')}
                    defaultValue = { values.password }
                />
                <br /><br /><br />
            </Fragment>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormAccountDetails
