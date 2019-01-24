import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

// Global
let editExpense, startRemoveExpense, wrapper, history

beforeEach(() => {
    history = { push: jest.fn() };
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history}
            expense={expenses[1]}
        />
    );
});

test('Should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('Should handle startRemoveExpense', () => {
    // Finding button and simulating click event
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    })
});