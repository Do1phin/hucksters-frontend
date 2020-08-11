// Core
import produce from 'immer';
// Redux types
import { photosTypes } from './photos.constants';

const initialState = {
	photos: [],
	photo_number: null,
};

const photoReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case photosTypes.FILL_PHOTOS:
			draft.photos = action.payload;
			break;

		case photosTypes.FILL_MORE_PHOTOS:
			draft.photos = [...draft.photos, ...action.payload];
			break;

		default:
			return draft;
	}
});

export {
	photoReducer,
};
