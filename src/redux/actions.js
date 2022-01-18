import * as actions from './ActionsType';


export const addFavouriteAction = (movie) => {
	return {
		type: actions.ADD_TO_FAVOURITE,
		payload: movie,
	};
};

export const RemoveFromFavouriteAction = (id) => {
	return {
		type: actions.REMOVE_FROM_FAVOURITE,
		payload: id,
	};
};
