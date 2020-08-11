// Core
import produce from 'immer';
// Redux types
import { checkGroupTypes } from './checkGroup.constants';

const initialState = {
    group_id: null,
    group_size: null,
};

const checkGroupReducer = produce((draft = initialState, action) => {

    switch (action.type) {
        case checkGroupTypes.SET_ID_OF_THE_CHECKED_GROUP:
            draft.group_id = action.payload;
            break;

        case checkGroupTypes.SET_SIZE_OF_THE_CHECKED_GROUP:
            draft.group_size = action.payload;
            break;

        default:
            return draft
    }
});

export {
    checkGroupReducer
};
