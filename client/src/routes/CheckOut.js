import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import ReviewOrder from '../components/ReviewOrder';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Sneaker City
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        }
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}));
  
const steps = ['Shipping address', 'Payment details', 'Review your order'];
  
function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <ReviewOrder />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
  
    document.title = `Checkout | Sneaker City`;

    const handleNext = () => {
        if(activeStep === steps.length - 1){
            if(window.emptyCart){
                window.emptyCart();
            }
            
            setActiveStep(activeStep + 1);
        }
        else if(activeStep === 0){
            if(window.address){
                if(!window.address.firstname  || (window.address.firstname && !window.address.firstname.trim())){
                    alert('First name required.')
                }
                else if(!window.address.lastname || (window.address.lastname && !window.address.lastname.trim())){
                    alert('Last name required.')
                }
                else if(!window.address.address1 || (window.address.address1 && !window.address.address1.trim())){
                    alert('Address 1 required.')
                }
                else if(!window.address.city || (window.address.city && !window.address.city.trim())){
                    alert('City required.')
                }
                else if(!window.address.zip || (window.address.zip && !window.address.zip.trim())){
                    alert('Zip required.')
                }
                else if(!window.address.country || (window.address.country && !window.address.country.trim())){
                    alert('Country required.')
                }
                else {
                    setActiveStep(activeStep + 1);
                }
            }
            else {
                alert('Please provide address.')
            }
        }
        else if(activeStep === 1){
            if(window.paymentCard){
                if(!window.paymentCard.name  || (window.paymentCard.name && !window.paymentCard.name.trim())){
                    alert('Card name required.')
                }
                else if(!window.paymentCard.number || (window.paymentCard.number && !window.paymentCard.number.trim())){
                    alert('Card number required.')
                }
                else if(!window.paymentCard.expiryDate || (window.paymentCard.expiryDate && !window.paymentCard.expiryDate.trim())){
                    alert('Card expiry date required.')
                }
                else if(!window.paymentCard.cvv || (window.paymentCard.cvv && !window.paymentCard.cvv.trim())){
                    alert('Card CVV required.')
                }
                else {
                    setActiveStep(activeStep + 1);
                }
            }
            else {
                alert('Please provide card details.')
            }
        }
        else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>

                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                                </Typography>
                            </React.Fragment>
                        ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} className={classes.button}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}>
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </div>
                        </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                
                <Copyright />
            </main>
        </React.Fragment>
    );
}