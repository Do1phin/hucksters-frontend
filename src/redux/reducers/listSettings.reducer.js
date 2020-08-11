// Core
import produce from 'immer';
// Redux types
import { types } from '../actions/actionTypes';

const initialState = {
	limit: 100,
	sort: -1,
	skip: 0,
	load_more: false,
	part_items: 0,
	total_loaded_items: 0,
	total_items: 0,
	member_status: 'Seller',
	member_country: '',
};

const listSettingsReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case types.SET_SELECT_NUMBER_ITEMS_TO_LIMIT:
			draft.limit = action.payload;
			break;

		case types.SET_NUMBER_ITEMS_TO_SKIP:
			draft.skip = action.payload;
			break;

		case types.SET_SELECT_SORT_TYPE_OF_ITEMS:
			draft.sort = action.payload;
			break;

		case types.SET_NUMBER_FETCHED_PART_ITEMS:
			draft.part_items = action.payload;
			break;

		case types.SET_NUMBER_TOTAL_ITEMS:
			draft.total_items = action.payload;
			break;

		case types.SET_NUMBER_TOTAL_LOADED_ITEMS:
			draft.total_loaded_items = action.payload;
			break;

		case types.SET_FLAG_LOAD_MORE:
			draft.load_more = action.payload;
			break;

		case types.SET_SELECT_MEMBER_STATUS:
			draft.member_status = action.payload;
			break;

		case types.SET_SELECT_MEMBER_COUNTRY:
			draft.member_country = action.payload;
			break;

		default:
			return draft;
	}
});

export {
	listSettingsReducer,
};
