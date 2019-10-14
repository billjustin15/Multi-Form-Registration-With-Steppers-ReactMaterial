import React, { Component, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, TextField, Button, Toolbar, Typography } from '@material-ui/core/'


export class FormUserDetails extends Component {
    
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
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
                    label="Firstname"
                    type="text"
                    margin="normal"
                    onChange = { handleChange('firstname')}
                    defaultValue = { values.firstname }
                />
                <br />
                <TextField
                    label="Lastname"
                    type="text"
                    margin="normal"
                    onChange = { handleChange('lastname')}
                    defaultValue = { values.lastname }
                />
                <br />
                <TextField
                    label="Email"
                    type="text"
                    margin="normal"
                    onChange = { handleChange('email')}
                    defaultValue = { values.email }
                />
                <br />
                <Button variant="contained" color="primary" style={ styles.button } onClick={ this.continue }>CONTINUE</Button>
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

export default FormUserDetails
