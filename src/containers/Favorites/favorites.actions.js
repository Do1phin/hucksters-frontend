// Core
import axios from 'axios';
import { types } from '../actions/actionTypes';
import { createFavoritePhotoInDB } from '../../components/FavoriteBtn/favoriteBtn.api';
// Utils
import { handleError } from '../../utils/errorHandler';

export const fillFavoritesAction = (favorites) => {
	return {
		type: types.FILL_FAVORITES_ALL,
		payload: favorites,
	};
};

export const setFavoritesPhotos = (photos) => {
	return {
		type: types.FILL_FAVORITES_PHOTOS,
		payload: photos,
	};
};

export const FavoritesGetAsyncAction = () => {
	return async (dispatch) => {
		try {
			const response = await axios.post('/api/favorite', {});
			dispatch(fillFavoritesAction(response.data[0]));
		} catch (e) {
			handleError(e, dispatch);
		}
	};
};

export const FavoritesPhotoAddAsyncAction = () => {
	return async (dispatch) => {

		await createFavoritePhotoInDB()
			.then(response => {
				if (!response) return console.error('Add favorite photo failed');
				dispatch({ type: types.FILL_FAVORITES_PHOTOS, payload: response });
			});
	};
};

