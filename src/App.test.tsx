import React from 'react';
import { render } from '@testing-library/react';
// import App from './App';

test('renders app component', () => {
    const { asFragment } = render(<div>Hello</div>);
    expect(asFragment()).toMatchSnapshot();
});
