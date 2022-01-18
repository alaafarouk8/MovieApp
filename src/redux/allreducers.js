import { combineReducers } from 'redux';
import { moviesReducer } from './reducers';

export const allReducers = combineReducers({
	movies: moviesReducer,
});
