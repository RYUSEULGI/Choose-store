import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './couter/store/counter.reducer';
import counterSlice from './couter/store/counter.slice';

const rootReducer = combineReducers({ counterReducer, counterSlice });

// 바닐라 리덕스
// const store = createStore(rootReducer);

const store = configureStore({
    reducer: rootReducer,
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
