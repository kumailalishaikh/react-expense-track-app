import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { start } from 'repl';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout correctly', () => {
    const startLogout  = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);

    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});