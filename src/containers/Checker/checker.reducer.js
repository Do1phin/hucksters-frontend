// Core
import produce from 'immer';
// Redux types
import { checkerTypes } from './checker.constants';

const initialState = {
	thing: null,
	step: null,
	status: null,
};

const checkerReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case checkerTypes.SET_CHECKER_THING:
			draft.thing = action.payload;
			break;

		case checkerTypes.SET_CHECKER_STEP:
			draft.step = action.payload;
			break;

		case checkerTypes.SET_CHECKER_STATUS:
			draft.status = action.payload;
			break;

		default:
			return draft;
	}
});

export {
	checkerReducer,
};
