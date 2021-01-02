import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
//importing componets
import InputForm from './Components/InputForm';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Today to do list🐾</h1>
            </header>
            <InputForm />
        </div>

    );
} 

export default App;
