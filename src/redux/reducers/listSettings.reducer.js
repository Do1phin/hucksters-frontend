import { types } from '../actions/actionTypes';

const initialState = {
    limit: 100,
    sort: -1,
    skip: 0,
    part_items: 0,
    total_loaded_items: 0,
    total_items: 0,
    member_status: 'Seller',
    member_country: '',
};

const listSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SELECT_NUMBER_ITEMS_TO_LIMIT:
            return {
                ...state,
                limit: action.payload
            };
        case types.SET_NUMBER_ITEMS_TO_SKIP:
            return {
                ...state,
                skip: action.payload
            };
        case types.SET_SELECT_SORT_TYPE_OF_ITEMS:
            return {
                ...state,
                sort: action.payload
            };
        case types.SET_NUMBER_FETCHED_PART_ITEMS:
            return {
                ...state,
                part_items: action.payload
            };
        case types.SET_NUMBER_TOTAL_ITEMS:
            return {
                ...state,
                total_items: action.payload
            };
        case types.SET_NUMBER_TOTAL_LOADED_ITEMS:
            return {
                ...state,
                total_loaded_items: action.payload
            };
        case types.SET_FLAG_LOAD_MORE:
            return {
                ...state,
                load_more: action.payload
            };
        case types.SET_SELECT_MEMBER_STATUS:
            return {
                ...state,
                member_status: action.payload
            };
        case types.SET_SELECT_MEMBER_COUNTRY:
            return {
                ...state,
                member_country: action.payload
            };
        default:
            return state
    }
};

export {
    listSettingsReducer
};
