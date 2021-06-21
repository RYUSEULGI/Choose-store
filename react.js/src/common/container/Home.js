import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to="/counter">바닐라리덕스 카운터</Link>
            <Link to="/toolkit-counter">리덕스툴킷 카운터</Link>
        </>
    );
};

export default Home;
