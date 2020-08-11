// Core
import produce from 'immer';
// Redux types
import { searchTypes } from './search.constants';

const initialState = {
	search_text: '',
};

const searchReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case searchTypes.UPDATE_SEARCH_STRING:
			draft.search_text = action.payload;
			break;

		case searchTypes.CLEAR_SEARCH_STRING:
			draft.search_text = '';
			break;

		default:
			return draft;
	}
});

export {
	searchReducer,
};
