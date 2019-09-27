import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';

import Cart from '../routes/Cart';
import CheckOut from '../routes/CheckOut';
import ProductDetails from '../routes/ProductDetails';

//tests routes for successful rendering

describe('Cart', () => {
    test('renders without crashing', () => {
        const component = create(<Cart />); 
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('CheckOut', () => {
    test('renders without crashing', () => {
        const component = create(<CheckOut />); 
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ProductDetails', () => {
    const component = create(<ProductDetails />); 
    const tree = component.toJSON();

    test('renders without crashing', () => {
        expect(tree).toMatchSnapshot();
    });
});