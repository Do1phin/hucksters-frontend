import { types } from '../../redux/actions/actionTypes'

export const CheckMembersFillAllParametersAction = (parameters) => {
    return {
        type: types.CHECK_MEMBERS_ALL_PARAMETERS,
        payload: parameters
    }
};

export const CheckMembersAllAction = (members) => {
    return {
        type: types.CHECK_MEMBERS_ALL,
        payload: members
    }
};

export const CheckMembersWithInfoAction = (members) => {
    return {
        type: types.CHECK_MEMBERS_WITH_INFO,
        payload: members
    }
};

export const CheckMembersClosedAction = (members) => {
    return {
        type: types.CHECK_MEMBERS_CLOSED,
        payload: members
    }
};

export const CheckMembersSellerAction = (members) => {
    return {
        type: types.CHECK_MEMBERS_SELLER,
        payload: members
    }
};

export const CheckMembersBannedAction = (members) => {
    return {
        type: types.CHECK_MEMBERS_BANNED,
        payload: members
    }
};

export const CheckMembersDeletedAction = (members) => {
    return {
        type: types.CHECK_MEMBERS_DELETED,
        payload: members
    }
};




