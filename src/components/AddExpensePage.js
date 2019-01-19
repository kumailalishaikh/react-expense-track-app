import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseFrom';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/'); // Using push method from history object for redirecting
    };

    render() {
        return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={this.onSubmit}
            />
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// Code before S12-124 Video
/*
const AddExpensePage = (props) => (
    <div>
        This is from my add expense component !
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/'); // Using push method from history object for redirecting
            }}
        />
    </div>
);

export default connect()(AddExpensePage);
*/