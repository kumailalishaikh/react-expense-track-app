import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-Layout__box">
            <h1 className="box-layout__title">Expense Tracker</h1>
            <p>Track your everday expenses !</p>
            <button class="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);