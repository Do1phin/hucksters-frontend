import { types } from '../actions/actionTypes';

const initialState = {
    thing: null,
    step: null,
    status: null
};

const checkerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CHECKER_THING:
            return {
                ...state,
                thing: action.payload
            };
        case types.SET_CHECKER_STEP:
            return {
                ...state,
                step: action.payload
            };
        case types.SET_CHECKER_STATUS:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state
    }
};

export {
    checkerReducer
};
