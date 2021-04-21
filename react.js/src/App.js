import React from 'react';
import { Route } from 'react-router-dom';
import CounterCotainer from './container/CounterContainer';
import RTKCounterContainer from './container/RTKCounterContainer';

const App = () => {
    return (
        <>
            <Route exact path="/counter" component={CounterCotainer} />
            <Route
                exact
                path="/toolkit-counter"
                component={RTKCounterContainer}
            />
        </>
    );
};

export default App;
