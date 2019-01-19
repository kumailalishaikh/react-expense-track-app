import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);