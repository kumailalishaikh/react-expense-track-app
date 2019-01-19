import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = 'amount';
    wrapper.find('input').simulate('change', {
        target : { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target : { value }
    });
    expect(sortByDate).toHaveBeenCalledWith();
});

test('Should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target : { value }
    });
    expect(sortByAmount).toHaveBeenCalledWith();
});

test('Should handle date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    const SDP = wrapper.find('withStyles(DateRangePicker)');
    SDP.prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus change', () => {
    const calenderFocused = 'endDate'
    const SDP = wrapper.find('withStyles(DateRangePicker)');
    SDP.prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});