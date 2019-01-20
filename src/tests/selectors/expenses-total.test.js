import selectExpensesTotoal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expense', () => {
    const res = selectExpensesTotoal([]);
    expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const res = selectExpensesTotoal([expenses[0]]);
    expect(res).toBe(195);
});

test('Should correctly add up all expenses', () => {
    const res = selectExpensesTotoal(expenses);
    expect(res).toBe(114195);
});