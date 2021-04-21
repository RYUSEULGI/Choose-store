import React from 'react';

const RTKCounter = React.memo(({ number, onIncrease, onDecrease }) => {
    return (
        <>
            <h1>리덕스 툴 킷 카운터</h1>
            <span>{number}</span>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
});

export default RTKCounter;
