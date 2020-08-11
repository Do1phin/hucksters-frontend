// Core
import produce from 'immer';
// Redux types
import { types } from './favoriteBtn.constants';

const initialState = {
    user_id: '',
    favorite_members: [],
    favorite_albums: [],
    favorite_photos: []
};

const favoriteReducer = produce((draft = initialState, action) => {

    switch (action.type) {
        // case FILL_FAVORITES:
        //     return {
        //         ...state,
        //         user_id: action.payload.user_id,
        //         favorite_members: [...action.payload.favorite_members],
        //         favorite_albums: [...action.payload.favorite_albums],
        //         favorite_photos: [...action.payload.favorite_photos],
        //     };

        case types.ADD_ALBUM_TO_FAVORITE:
            draft.favorite_albums = [...draft, action.payload];
            break;

        case types.ADD_MEMBER_TO_FAVORITE:
            draft.favorite_members = [...draft, action.payload];
            break;

        case types.ADD_PHOTO_TO_FAVORITE:
            draft.favorite_photos = [...draft, action.payload];
            break;

        default:
            return draft;
    }
});

export {
    favoriteReducer
};
