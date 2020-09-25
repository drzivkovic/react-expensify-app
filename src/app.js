import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Approuter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpanses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpanses = getVisibleExpanses(state.expenses, state.filters);
    console.log(visibleExpanses);
});


const jsx = (
    <Provider store={store}>
        <Approuter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));