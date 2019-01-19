import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {/* Condition rendering - Checks existance of expenses */}
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
);

// HOC
/*
const ConnectedExpenseList = connect((state) => {
    return {
        expenses: state.expenses
    };
})(ExpenseList);

export default ConnectedExpenseList;
*/

// Higher Order Component
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
        // filters: state.filters
        // expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseList);