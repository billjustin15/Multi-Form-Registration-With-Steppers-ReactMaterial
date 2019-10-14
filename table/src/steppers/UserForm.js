import React, { Fragment } from 'react';
import { AppBar, Stepper, Step, StepLabel, Button, Typography, Toolbar, Container } from '@material-ui/core/';
import FormPersonalDetails from './FormPersonalDetails'
import FormAccountDetails from './FormAccountDetails'
import Confirm from './Confirm'
import Success from './Success'

export default ({handleChange, values}) => {
    
    function getSteps() {
        return ['Account details', 'Personal Information', 'Review account', 'Account Verification'];
    }
      
    function getStepContent(stepIndex)  {
        switch (stepIndex) {
          case 0:
            return <FormAccountDetails handleChange={handleChange} values={ values } />;
          case 1:
            return <FormPersonalDetails handleChange={handleChange} values={ values } />;
          case 2:
            return <Confirm values={ values } />;
          default:
            return <Success />;
        }
    }
   
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    }

    return (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">Registration Form</Typography>
                </Toolbar>
            </AppBar>
            <Container style={{marginTop: 60}}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                     ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                    <div>
                        <Typography>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                    ) : (
                    <div>
                        <Typography>{getStepContent(activeStep)}</Typography>
                        <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
            </Container>
        </Fragment>
        )
    
}
