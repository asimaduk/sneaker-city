import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';

import App from '../App';

describe('App', () => {
    test('renders without crashing', () => {
        const component = create(<App />); 
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
