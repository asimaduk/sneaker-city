import React, { Component } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import Product from '../components/Product';

import '../App.css';

import apiGetProducts from '../api/getProducts';

class ProductList extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            noProductFound: false
        }

        this.mounted = true;
    }

    componentDidMount = () => {
        document.title = `Sneaker City. Curated Experience For Sneaker Lovers.`;
        //get first 10 products
        this.getProducts(0,10);

        //setting a global method to get a single product already fetched from server
        window.getProduct = (id) => {
            const temp = this.state.products.filter(product => product.id === id);
            const product = temp[0];
            return product;
        }
    }

    componentWillUnmount = () => {
        this.mounted = false;
    }

    getProducts = (start, end) => {            
        apiGetProducts(start, end)
            .then(products => { 
                if(products.length > 0){               
                    this.mounted && this.setState({products});
                }
                else {
                    this.mounted && this.setState({noProductFound: true});
                }

                return true;
            })
            .catch(error => {
                alert('Sorry an unknown error occurred.');
                this.mounted && this.setState({noProductFound: true});
            })
    }

    render() {
        const { products, noProductFound } = this.state;

        return (
            <div>
                {products.length > 0 ? (
                        <Grid container spacing={24} style={{padding: 24}}>
                            {products.map((currentProduct, index) => (
                                <Grid key={index} className="Grid" item xs={12} sm={6} lg={4} xl={3}>
                                    <Product product={currentProduct} />
                                </Grid>
                            ))}
                        </Grid>
                    )
                    : noProductFound ?
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300}}>
                        <h3>No products found</h3>
                    </div>
                    :
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300}}>
                        <CircularProgress />
                    </div>
                }
            </div>
        )
    }
}

export default ProductList;
