// Core
import produce from 'immer';
// Redux types
import { types } from '../actions/actionTypes';

const initialState = {
	loading: false,
	fetching: false,
	error: null,
};

const generalSettingsReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case types.START_LOADING:
			draft.loading = true;
			break;

		case types.STOP_LOADING:
			draft.loading = false;
			break;

		case types.START_FETCHING:
			draft.fetching = true;
			break;

		case types.STOP_FETCHING:
			draft.fetching = false;
			break;

		case types.SET_ERROR:
			draft.error = true;
			break;

		default:
			return draft;
	}
});

export {
	generalSettingsReducer,
};
