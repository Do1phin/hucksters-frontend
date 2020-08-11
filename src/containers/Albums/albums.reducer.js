// Core
import produce from 'immer';
// Redux types
import { albumsTypes } from './albums.constants';


const initialState = {
	albums: [],
	album_id: null,
	albums_fetching: null,
	albums_fetching_error: null,
};

const albumReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case albumsTypes.START_ALBUMS_FETCHING:
			draft.albums_fetching = true;
			break;

		case albumsTypes.STOP_ALBUMS_FETCHING:
			draft.albums_fetching = false;
			break;

		case albumsTypes.FILL_ALBUMS:
			draft.albums = action.payload;
			break;

		case albumsTypes.FILL_MORE_ALBUMS:
			draft.albums = [...draft.albums, ...action.payload];
			break;

		case albumsTypes.SET_ALBUMS_FETCHING_ERROR:
			draft.error = true;
			draft.albums_fetching_error = action.payload;
			break;

		default:
			return draft;
	}
});

export {
	albumReducer,
};
