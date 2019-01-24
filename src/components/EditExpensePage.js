import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseFrom';

// Class-based EditExpensePage component
export class EditExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onClick = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }

    render() {
        return (
        <div>
            {/* Editing the expense with id of {this.props.match.params.id} */}
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onClick}>Remove</button>
        </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// Code before S12-125
// Stateless component
// const EditExpensePage = (props) => {
//     // console.log(props);
//     return (
//         <div>
//             Editing the expense with id of {props.match.params.id}
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                 }}
//             />
//             <button onClick={() => {
//                 props.dispatch(removeExpense({id: props.expense.id}));
//                 props.history.push('/');
//             }}>Remove</button>
//         </div>
//     );
// };

// const mapStateToProps = (state, props) => {
//     return {
//         expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//     };
// };

// export default connect(mapStateToProps)(EditExpensePage);
