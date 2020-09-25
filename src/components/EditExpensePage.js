import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpanse } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = (e) => {
        this.props.removeExpanse({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render(){
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expanse}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expanse: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (expense) => dispatch(editExpense(expense)),
    removeExpanse: (data) => dispatch(removeExpanse(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);