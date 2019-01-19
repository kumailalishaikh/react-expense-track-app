import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123456' });
    
    // For object and arrays toEqual() function is used
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    });
});

test('Should setup edit expense object', () => {
    const action = editExpense('123456', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        updates: { note: 'New note value' }
    });
});

test('Should setup add expense action object with provied values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 123456789,
        createdAt: 10000,
        note: 'This was the last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});