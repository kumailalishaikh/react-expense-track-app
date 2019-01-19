import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import reactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Expensify');

    // const renderer = new reactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});