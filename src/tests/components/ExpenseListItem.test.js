import React from 'react';
import { shallow } from 'enzyme';
import ExepnseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExepnseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});