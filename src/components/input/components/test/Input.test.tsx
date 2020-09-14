import React from 'react';
import Input from '../Input';
import { render } from '@testing-library/react';

test('render Input component', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
});
