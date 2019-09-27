import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    }
}))

export default function ReviewOrder() {
    const classes = useStyles();
    
    let cartItems = [];
    let total = 0;

    //calling a global function for any items in cart
    if(window.getCart){
        cartItems = window.getCart();

        if(cartItems && cartItems.length > 0){
            cartItems.forEach(item=> {
                total += item.price;
            })
        }
    }

    //used to store payment card details that's set as an object on window
    const payments = [
        { name: 'Card type', detail: 'Visa' },
        { name: 'Card holder', detail: (window && window.paymentCard && window.paymentCard.name) ? window.paymentCard.name : "" },
        { name: 'Card number', detail: (window && window.paymentCard && window.paymentCard.number) ? `xxxx-xxxx-xxxx-${window.paymentCard.number.slice(12)}` : "" },
        { name: 'Expiry date', detail: (window && window.paymentCard && window.paymentCard.expiryDate) ? window.paymentCard.expiryDate : "" },
    ];

    const address = window.address;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>

            <List disablePadding>
                {cartItems.map(product => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={`${product.model} (Size: ${product.size})`} />
                        <Typography variant="body2">$ {product.price}</Typography>
                    </ListItem>
                ))}
                
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    
                    <Typography variant="subtitle1" className={classes.total}>
                        $ {total}
                    </Typography>
                </ListItem>
            </List>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{address && `${address.firstname}`} {address && `${address.lastname}`}</Typography>
                    <Typography gutterBottom>{address && `${address.address1}`} {address && address.address2 && ` , ${address.address2}`}</Typography>
                    <Typography gutterBottom>{address && `${address.city}, ${address.zip}, ${window.address.country}`}</Typography>
                </Grid>

                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
                    </Typography>
                    
                    <Grid container>
                        {payments.map(payment => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}