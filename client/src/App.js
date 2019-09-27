import React, { Component } from 'react';

import NavBar from './components/NavBar';
import ProductList from './components/ProductList';

import ProductDetails from './routes/ProductDetails';
import Cart from './routes/Cart';
import CheckOut from './routes/CheckOut';
import NotFound from './routes/NotFound';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor(){
        super();
    
        this.state = {
            cartItems: []
        }

        //adding functions (cart) to the global object window, so they can be accessed from 
        // any component

        window.addToCart = (item) => {
            let temp = this.state.cartItems;
            temp.push(item);

            this.setState({cartItems: temp});
        }

        window.removeFromCart = (item) => {
            const temp = this.state.cartItems.filter(product => {
                if((product.id === item.id) && (product.size === item.size)){
                    return false;
                }
                
                return true;
            });
      
            this.setState({cartItems: temp});
        }

        window.getCart = () => {
            return this.state.cartItems;
        }
      
        window.emptyCart = () => {
            this.setState({cartItems: []})
        }
    }

    render(){
        const { cartItems } = this.state;
    
        return (
            <Router>
                <div>
                    <NavBar cartItemsCount={cartItems.length}/>
                    
                    <Switch>
                        <Route path="/" exact component={ProductList} />
                        <Route path="/products/:brand/:id" component={ProductDetails}/>
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={CheckOut} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;