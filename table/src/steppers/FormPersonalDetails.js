import React, { Component, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, TextField, Button, Toolbar, Typography } from '@material-ui/core/'


export class FormPersonalDetails extends Component {
    render() {
        
        // destructing 'values' from the props so that we can use it as a variable
        const { values, handleChange } = this.props
        return (
            <Fragment>
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
                    label="Age"
                    type="text"
                    margin="normal"
                    onChange = { handleChange('age')}
                    defaultValue = { values.age }
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

export default FormPersonalDetails
