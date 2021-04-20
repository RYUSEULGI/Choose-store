import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'COUNTER_INCREASE';
const DECREASE = 'COUNTER_DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = { number: 0 };

const counterReducer = handleActions(
    {
        [INCREASE]: (state, action) => ({
            number: state.number + 1,
        }),
        [DECREASE]: (state, action) => ({
            number: state.number - 1,
        }),
    },
    initialState
);

export default counterReducer;
