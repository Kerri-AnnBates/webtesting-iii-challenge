// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from '../controls/Controls';
import Display from '../display/Display';

describe('<Controls />', () => {
    // buttons' text changes to reflect the state the door will be in if clicked
    test('close button clicked, open text shows', () => {
        const toggleClosedMock = jest.fn();
        const { getByText, findByText } = render(
            <Controls toggleClosed={toggleClosedMock} locked={false} />
        );
        fireEvent.click(getByText(/close gate/i)); //1st button click
        expect(toggleClosedMock).toHaveBeenCalled();
        expect(findByText(/open gate/));
    });

    test('close button clicked, open text shows', async () => {
        const toggleClosedMock = jest.fn();
        const { findByText } = render(
            <Controls toggleClosed={toggleClosedMock} closed={true} />
        );
        fireEvent.click(await findByText(/open gate/i));
        expect(toggleClosedMock).toHaveBeenCalled();
        expect(findByText(/close gate/));
    });

    test('renders the display', () => {
        render(<Display />);
    })

    // the closed toggle button is disabled if the gate is locked
    // the locked toggle button is disabled if the gate is open
})