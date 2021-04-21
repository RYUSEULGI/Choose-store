import React from 'react';
import { Route } from 'react-router-dom';
import CounterCotainer from './couter/container/CounterContainer';
import RTKCounterContainer from './couter/container/RTKCounterContainer';

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
