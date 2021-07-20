import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from 'common/index';
import { CounterCotainer, RTKCounterContainer } from 'couter/index';
import { Chat } from 'chat/index';
import Header from 'header/components/Header';

const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/counter" component={CounterCotainer} />
            <Route
                exact
                path="/toolkit-counter"
                component={RTKCounterContainer}
            />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/wantedNav" component={Header} />
        </>
    );
};

export default App;
