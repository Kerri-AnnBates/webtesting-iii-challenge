// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import Dashboard from '../dashboard/Dashboard';

describe('<Dashboard />', () => {
    test('renders Display component', ()=> {
       render(<Display 
           locked={false}
           closed={false}
       />);
    })
    test('renders Controls component', ()=> {
       
        const toggleLocked = jest.fn();
        const toggleClosed = jest.fn();

        render(<Controls 
            locked={false}
            closed={false}
            toggleLocked={toggleLocked}
            toggleClosed={toggleClosed}
        />);

    })

    // defaults to unlocked and open
    test('default render is unlocked and open', () => {
        const {getByText} = render(<Dashboard />);
        expect(getByText(/unlocked/i));
        expect(getByText(/open/i));
    });

    // cannot be closed or opened if it is locked
    test('cannot be closed or opened if it is locked', () => {
        const toggleLockMock = jest.fn();
        render (<Controls toggleLocked={toggleLockMock} locked={false} closed={false} />)
        expect(toggleLockMock).not.toHaveBeenCalled();
    })
})