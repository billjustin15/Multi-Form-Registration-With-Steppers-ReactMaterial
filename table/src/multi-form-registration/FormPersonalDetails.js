import React, { Component, Fragment } from 'react'
import { AppBar, TextField, Button, Toolbar, Typography } from '@material-ui/core/'


export class FormPersonalDetails extends Component {
    
    // for the continue button to move to the next component
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    // for the back button to return to the previous component
    back = e => {
        e.preventDefault()
        this.props.previousStep()
    }
    render() {
        
        // destructing 'values' from the props so that we can use it as a variable
        const { values, handleChange } = this.props
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Enter Information</Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    label="Age"
                    type="text"
                    margin="normal"
                    onChange = { handleChange('age')}
                    defaultValue = { values.age }
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
                <br />
                <Button variant="contained" color="primary" style={ styles.button } onClick={ this.continue }>CONTINUE</Button>
                <Button variant="contained" style={ styles.button } onClick={ this.back }>BACK</Button>
                <br />
            </Fragment>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
