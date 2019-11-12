// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from '../display/Display';

describe('<Display />', () => {
    test('It should match snapshot', () => {
        const display = render('<Display />')
        expect(display).toMatchSnapshot();
    });

    test('display closed if closed prop is true', () => {
        const { getByText } = render(<Display closed={true} />)
        expect(getByText(/closed/i));
    })
    
    test('display open if closed prop is false', () => {
        const { getByText } = render(<Display closed={false} />)
        expect(getByText(/open/i));
    })
    
    test('display locked if locked prop is true', () => {
        const { getByText } = render(<Display locked={true} />)
        expect(getByText(/locked/i));
    })
    
    test('display locked if locked prop is true', () => {
        const { getByText } = render(<Display locked={false} />)
        expect(getByText(/unlocked/i));
    })

    //when locked or closed use the red-led class
    test('locked or closed use .red-led class ', async () => {
        const { findByText } = render(<Display closed={true} locked={true} />);
        const lockedDisplay = await findByText(/locked/i);
        expect(lockedDisplay.className).toMatch('red-led');
    });

    //when unlocked or open use the green-led class
        test('locked or closed use .green-led class ', () => {
            const {getByText} = render(<Display  closed={false} locked={false} />);
            const lockedDisplay = getByText('Unlocked');
            expect(lockedDisplay.className).toMatch('green-led');
        });
});
