// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

describe('<Display />', () => {
    test('It should match snapshot', () => {
        const display = render('<Display />')
        expect(display).toMatchSnapshot();
    });
});
