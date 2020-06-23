// Redux constants
import { SEARCH_STRING_UPDATE } from './search.constants';
import {
    ListSettingsSetFetchedPartItemsAction,
    ListSettingsSetItemsToSkipAction, ListSettingsSetTotalLoadedItemsAction,
} from '../../redux/actions/listSettings.actions';

export const SearchStringUpdateAsyncAction = (string) => {
    return async (dispatch) => {

        dispatch({
            type: SEARCH_STRING_UPDATE,
            payload: string
        })
    };
};

export const HandleSubmitSearchFormAction = (text) => {
    return async (dispatch, state) => {
        if (text) {
            dispatch(ListSettingsSetItemsToSkipAction(0));
            dispatch(ListSettingsSetFetchedPartItemsAction(0));
            dispatch(ListSettingsSetTotalLoadedItemsAction(0));
            dispatch(SearchStringUpdateAsyncAction(text));
        }
    };
};

export const HandleClearSearchFormAction = () => {
    return async (dispatch, state) => {
        console.log(11)
        // searchInput.current.value = '';
        // dispatch(SearchStringUpdateAsyncAction(''));
    };
};

export const HandleChangeSearchFormAction = (event) => {
    return async (dispatch, state) => {

        let text = event.target.value;

        if (event.key === 'Enter' && text) {
            dispatch(HandleSubmitSearchFormAction(text));
        }
    };
};
