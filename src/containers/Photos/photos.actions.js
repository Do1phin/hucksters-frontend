// Redux constants
import {
    PHOTOS_START_FETCHING,
    PHOTOS_STOP_FETCHING,
    PHOTOS_FILL,
    PHOTOS_FILL_MORE,
    PHOTOS_SET_FETCHING_ERROR
} from '../Photos/photos.constants';
// Redux actions
import {
    ListSettingsSetFetchedPartItemsAction,
    ListSettingsSetItemsToSkipAction, ListSettingsSetTotalItemsAction,
    ListSettingsSetTotalLoadedItemsAction
} from '../../redux/actions/listSettings.actions';
// API
import { APIReadPhotosFromDB } from './photos.api';

export const startPhotosFetchingAction = () => {
    return {
        type: PHOTOS_START_FETCHING
    };
};

export const stopPhotosFetchingAction = () => {
    return {
        type: PHOTOS_STOP_FETCHING
    };
};

export const fillPhotosAction = (photos) => {
    return {
        type: PHOTOS_FILL,
        payload: photos
    };
};

export const fillMorePhotosAction = (photos) => {
    return {
        type: PHOTOS_FILL_MORE,
        payload: photos
    };
};

export const setFetchingError = (error) => {
    return {
        type: PHOTOS_SET_FETCHING_ERROR,
        error: true,
        payload: error
    };
};

export const PhotosFillAsyncAction = (photos) => {
    return async (dispatch, getState) => {
        const state = getState();

        let variables = {
            text: state.search.search_text,
            skip: state.list_settings.skip,
            limit: state.list_settings.limit,
            sort: state.list_settings.sort,
            flagTotalPhotos: true
        };

        dispatch(startPhotosFetchingAction());
        await APIReadPhotosFromDB(variables)
            .then(data => {

                dispatch(stopPhotosFetchingAction());

                if (data) {
                    const items = data.photos;
                    dispatch(ListSettingsSetFetchedPartItemsAction(items.length));
                    dispatch(ListSettingsSetTotalItemsAction(data.totalPhotos));

                    if (state.list_settings.load_more) {
                        dispatch(fillMorePhotosAction(items));
                        dispatch(ListSettingsSetTotalLoadedItemsAction(
                            state.list_settings.total_loaded_items + items.length
                        ));
                    } else {
                        dispatch(ListSettingsSetItemsToSkipAction(0));
                        dispatch(fillPhotosAction(items));
                        dispatch(ListSettingsSetTotalLoadedItemsAction(items.length));
                    }
                } else {
                    dispatch(setFetchingError())
                }
            });
    };
};
