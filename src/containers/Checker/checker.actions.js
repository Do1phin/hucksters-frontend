import { SET_CHECKER_STATUS, SET_CHECKER_STEP, SET_CHECKER_THING } from '../../containers/Checker/checker.constants';

export const CheckerSetThingStringAction = (thing) => {
	return {
		type: SET_CHECKER_THING,
		payload: thing,
	};
};

export const CheckerSetStepNumberAction = (step) => {
	return {
		type: SET_CHECKER_STEP,
		payload: step,
	};
};

export const CheckerSetStatusStringAction = (status) => {
	return {
		type: SET_CHECKER_STATUS,
		payload: status,
	};
};

