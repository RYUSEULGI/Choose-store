import React from 'react';
import { Route } from 'react-router-dom';
import CounterCotainer from './container/CounterContainer';

const App = () => {
    return (
        <>
            <Route exact path="/counter" component={CounterCotainer} />
        </>
    );
};

export default App;
