// Core
import produce from 'immer';
// Redux types
import { membersTypes } from './members.constants';

const initialState = {
	members: [],
	member_number: null,
};

const memberReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case membersTypes.FILL_MEMBERS:
			draft.members = action.payload;
			break;

		case membersTypes.FILL_MORE_MEMBERS:
			draft.members = [...draft.members, ...action.payload];
			break;

		default:
			return draft;
	}
});

export {
	memberReducer,
};
