// Core
import produce from 'immer';
// Redux types
import { favoritesTypes } from './favorites.constants';

const initialState = {
	user_id: '',
	favorite_members: [],
	favorite_albums: [],
	favorite_photos: [],
};

const favoritesReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case favoritesTypes.FILL_FAVORITES_ALL:
			draft.user_id = action.payload.user_id;
			draft.favorite_albums = [...action.payload.favorite_albums];
			draft.favorite_members = [...action.payload.favorite_members];
			draft.favorite_photos = [...action.payload.favorite_photos];
			break;

		case favoritesTypes.FILL_FAVORITES_ALBUMS:
			draft.favorite_albums = [...draft, action.payload];
			break;

		case favoritesTypes.FILL_FAVORITES_MEMBERS:
			draft.favorite_members = [...draft, action.payload];
			break;

		case favoritesTypes.FILL_FAVORITES_PHOTOS:
			draft.favorite_photos = [...draft, action.payload];
			break;

		default:
			return draft;
	}
});

export {
	favoritesReducer,
};
