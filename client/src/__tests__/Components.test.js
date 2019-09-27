import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';

import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Product from '../components/Product';
import ProductList from '../components/ProductList';
import ReviewOrder from '../components/ReviewOrder';

//tests components for successful rendering

describe('AddressForm', () => {
    test('renders without crashing', () => {
        const component = create(<AddressForm />); 
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('PaymentForm', () => {
    test('renders without crashing', () => {
        const component = create(<PaymentForm />); 
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Product', () => {
    test('renders without crashing', () => {
        const component = create(<Product />); 
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ProductList', () => {
    const component = create(<ProductList />); 
    const tree = component.toJSON();

    test('renders without crashing', () => {
        expect(tree).toMatchSnapshot();
    });
});

describe('ReviewOrder', () => {
    test('renders without crashing', () => {
        const component = create(<ReviewOrder />); 
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});