// Core
import produce from 'immer';
// Redux types
import { groupsTypes } from './groups.constants';

const initialState = {
    groups: [],
    group_id: '',
    groups_fetching: null,
    groups_fetching_error: null
};

const groupReducer = produce((draft = initialState, action) => {

    switch (action.type) {
        case groupsTypes.ADD_GROUP:
            draft.groups = [...draft.groups, ...action.payload];
            break;

        case groupsTypes.DELETE_GROUP:
            draft.groups = [...draft.groups];
            draft.filter(item => item.group_id !== action.payload);
            break;

        case groupsTypes.UPDATE_GROUP_INFO:
            draft.groups = [...action.payload];
            break;

        case groupsTypes.START_GROUPS_FETCHING:
            draft.groups_fetching = true;
            break;

        case groupsTypes.STOP_GROUPS_FETCHING:
            draft.groups_fetching = false;
            break;

        case groupsTypes.FILL_GROUPS:
            draft.groups = [...action.payload.data];
            break;

        case groupsTypes.SET_GROUPS_FETCHING_ERROR:
            draft.error = true;
            draft.groups_fetching_error = action.payload;
            break;

        default:
            return draft
    }
});

export {
    groupReducer
};
