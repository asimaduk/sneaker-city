import React, { Component } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import '../App.css';

import apiGetProduct from '../api/getProduct';
import apiGetProductSizes from '../api/getProductSizes';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                ) 
                : 
                null
            }
        </MuiDialogTitle>
    );
});
  
const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);
  
const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

class ProductDetails extends Component {
    constructor(props){
        super();

        this.state = {
            product: props.location ? props.location.product : null,
            open: false,
            selectedProduct: {},
            selectedSizes: {},
            sizes: [],
            sizesNotFound: false,
            productNotFound: false
        }

        this.mounted = true;
    }

    componentDidMount = () => {
        if(this.props.location && this.props.location.product){
            //calling a global function for any items in cart
            if(window.getCart){
                const cartItems = window.getCart();
                const { product } = this.state;

                document.title = `${product.name} - ${product.model} | Sneaker City`;

                if(product && cartItems && cartItems.length > 0){
                    const newSelectedSizes = {};

                    cartItems.forEach(item=> {
                        if(item.id === product.id){
                            //${item.id}_${item.size} unique id for product & selected size
                            newSelectedSizes[`${item.id}_${item.size}`] = true;
                        }
                    })

                    this.setState({selectedSizes: newSelectedSizes});
                }
            }

            this.getProductSizes(this.props.location.product.id);
        }
        else {
            if(window && window.getProduct){
                const product = window.getProduct(this.props.match.params.id);

                document.title = `${product.name} - ${product.model} | Sneaker City`;

                if(product){
                    if(window.getCart){
                        const cartItems = window.getCart();
            
                        if(cartItems && cartItems.length > 0){
                            const newSelectedSizes = {};
            
                            cartItems.forEach(item=> {
                                if(item.id === product.id){
                                    //${item.id}_${item.size} unique id for product & selected size
                                    newSelectedSizes[`${item.id}_${item.size}`] = true;
                                }
                            })
            
                            this.setState({selectedSizes: newSelectedSizes});
                        }
                    }

                    this.setState({product});
                    this.getProductSizes(product.id);
                }
            }
            else if(this.props.location) {
                const temp = this.props.location.pathname.split('/');
                const productId = temp[temp.length - 1];
                
                this.getProduct(productId);
            }
        }
    }

    componentWillUnmount = () => {
        this.mounted = false;
    }

    getProduct = (productId) => {
        apiGetProduct(productId)
            .then(product => {
                if(product && product.name.length > 0){
                    document.title = `${product.name} - ${product.model} | Sneaker City`;
                    
                    this.mounted && this.setState({product});

                    if(window.getCart){
                        const cartItems = window.getCart();
            
                        if(cartItems && cartItems.length > 0){
                            const newSelectedSizes = {};
            
                            cartItems.forEach(item=> {
                                if(item.id === product.id){
                                    //${item.id}_${item.size} unique id for product & selected size
                                    newSelectedSizes[`${item.id}_${item.size}`] = true;
                                }
                            })
            
                            this.setState({selectedSizes: newSelectedSizes});
                        }
                    }

                    this.getProductSizes(productId);
                }
                else {
                    this.mounted && this.setState({productNotFound: true});
                }
            })
            .catch(error => {
                alert(error);
                this.mounted && this.setState({productNotFound: true});
            })
    }

    getProductSizes = (productId) => {
        apiGetProductSizes(productId)
            .then(sizes => {
                if(sizes && sizes.length > 0){
                    this.mounted && this.setState({sizes});
                }
                else {
                    this.mounted && this.setState({sizesNotFound: true});
                }
            })
            .catch(error => {
                alert(error);
                this.mounted && this.setState({sizesNotFound: true});
            })
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false, selectedProduct: {}});
    };

    handleClickSelect = (product) => {
        this.setState({selectedProduct: product, open: true});
    };

    toggleCart = () => {
        const { selectedProduct, selectedSizes, product } = this.state;

        let newSelectedSizes = selectedSizes;

        //${product.id}_${selectedProduct.size} unique id for product & selected size
        if(newSelectedSizes[`${product.id}_${selectedProduct.size}`]){
            delete newSelectedSizes[`${product.id}_${selectedProduct.size}`];

            if(window.removeFromCart){
                window.removeFromCart({...selectedProduct, ...product});
            }
        }
        else {
            if(window.addToCart){
                window.addToCart({...selectedProduct, ...product});
            }

            newSelectedSizes[`${product.id}_${selectedProduct.size}`] = true;
        }
    
        this.setState({selectedSizes: newSelectedSizes, open: false});
    }

    formatReleaseDate = (timestamp) => {
        const date = new Date(timestamp);
    
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;

        let strTime = `${hours}:${minutes} ${ampm}`;

        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

        return `Available ${months[date.getMonth()]} ${date.getDate()} at ${strTime}`;
    }

    render() {
        const { open, sizesNotFound, productNotFound, product, selectedProduct, selectedSizes, sizes } = this.state;
        
        return (
            product ? 
                <Grid container spacing={24} style={{padding: 24}}>
                    <Grid  item xs={12} sm={12} lg={8}>
                        <img src={product.image} alt={product.name} style={{width:'100%'}}/>
                    </Grid>
                    
                    <Grid  item xs={12} sm={12} lg={4}>
                        <div className="">
                            <div className="">
                                <h3 className="Product-Name">{product.name}</h3>
                                <h6 className="Product-Desc">{product.model}</h6>
                                <p className="Product-Details-Price">${product.price}</p>
                                <p className="Product-Details-ReleaseDate">{this.formatReleaseDate(product.releaseDate)}</p>
                            </div>

                            <p className="Product-Details-Sizes" >Sizes & Quantity</p>
                            {sizes.length > 0 ? 
                                <List className="">
                                    {sizes.map((size,index) => {
                                        return (
                                            <ListItem key={index} role={undefined} dense button onClick={()=> this.handleClickSelect(size)}>
                                                <ListItemText id={index} primary={`Size: ${size.size} |  Quantity: ${size.quantity}`} />
                                                {selectedSizes[`${product.id}_${size.size}`] && 
                                                    <ShoppingCart />
                                                }
                                            </ListItem>
                                        );
                                    })}
                                </List>
                                
                                : sizesNotFound  ?
                                
                                <div style={{width:'200px', height:'50px', marginTop: '20px', paddingLeft:'16px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <p style={{color:'gray', margin:0}} >No sizes found for product</p>
                                </div>
                                :
                                <div style={{width:'200px', height:'50px', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <CircularProgress />
                                </div>
                            }
                        </div>
                    </Grid>

                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                            {product.model.toUpperCase()} / ${product.price} / Size: {selectedProduct && selectedProduct.size}
                        </DialogTitle>
                        
                        <DialogContent dividers>
                            <img src={product.image} alt={product.name} style={{width:'100%'}}/>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={this.toggleCart} color="primary">
                                {!selectedSizes[`${product.id}_${selectedProduct.size}`] ?
                                    <ShoppingCart className="Shopping-Cart-Icon" />
                                    : 
                                    <RemoveShoppingCart className="Shopping-Cart-Icon" /> 
                                }

                                {!selectedSizes[`${product.id}_${selectedProduct.size}`] ?
                                    "Add to cart"
                                    : 
                                    "Remove from cart"
                                }
                                
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                
                : productNotFound ?
                
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300}}>
                    <h3>Sorry, product not found!</h3>
                </div>
                :
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300}}>
                    <CircularProgress />
                </div>
        )
    }
}

export default ProductDetails;