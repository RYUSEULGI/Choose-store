import React from 'react';
import RTKCounter from '../components/RTKCounter';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../store/counter.slice';

const RTKCounterContainer = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counterSlice.number);
    return (
        <>
            <RTKCounter
                number={number}
                onIncrease={() => dispatch(increase(1))}
                onDecrease={() => dispatch(decrease(1))}
            />
        </>
    );
};

export default RTKCounterContainer;
