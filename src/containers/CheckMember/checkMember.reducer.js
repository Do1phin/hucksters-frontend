// Core
import produce from 'immer';
// Redux types
import { checkMemberTypes } from './checkMember.constants';

const initialState = {
	all_members: 0,
	with_info: 0,
	closed: 0,
	seller: 0,
	banned: 0,
	deleted: 0,
};

const checkMemberReducer = produce((draft = initialState, action) => {

	switch (action.type) {
		case checkMemberTypes.SET_ALL_CHECK_MEMBERS_VALUES:
			draft.all_members = action.payload.all_members;
			draft.with_info = action.payload.with_info;
			draft.closed = action.payload.closed;
			draft.seller = action.payload.seller;
			draft.banned = action.payload.banned;
			draft.deleted = action.payload.deleted;
			break;

		case checkMemberTypes.SET_NUMBER_OF_ALL_CHECK_MEMBERS:
			draft.all_members = action.payload;
			break;

		case checkMemberTypes.SET_NUMBER_OF_CHECK_MEMBERS_WITH_STATUS_WITH_INFO:
			draft.with_info = action.payload;
			break;

		case checkMemberTypes.SET_NUMBER_OF_CHECK_MEMBERS_WITH_STATUS_CLOSED:
			draft.closed = action.payload;
			break;

		case checkMemberTypes.SET_NUMBER_OF_CHECK_MEMBERS_WITH_STATUS_SELLER:
			draft.seller = action.payload;
			break;

		case checkMemberTypes.SET_NUMBER_OF_CHECK_MEMBERS_WITH_STATUS_BANNED:
			draft.banned = action.payload;
			break;

		case checkMemberTypes.SET_NUMBER_OF_CHECK_MEMBERS_WITH_STATUS_DELETED:
			draft.deleted = action.payload;
			break;

		default:
			return draft;
	}
});

export {
	checkMemberReducer,
};
