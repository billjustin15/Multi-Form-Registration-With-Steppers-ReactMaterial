import React, { Component, Fragment } from 'react'
import { AppBar, Container, List, ListItem, ListItemText, Button, Toolbar, Typography } from '@material-ui/core/'


export class Confirm extends Component {
    
    
    render() {
        
        // destructing 'values' from the props so that we can use it as a variable
        // so that we can use the variables itself
        const { values: { firstname, lastname, email, age, username, password } } = this.props
        return (
            <Fragment>
                <Container>
                <List>
                    <ListItem button>
                        <ListItemText primary="FirstName" secondary={ firstname } />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="LastName" secondary={ lastname } />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Email" secondary={ email } />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Age" secondary={ age } />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Username" secondary={ username } />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Password" secondary={ password } />
                    </ListItem>
                </List>
                </Container>
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

export default Confirm
