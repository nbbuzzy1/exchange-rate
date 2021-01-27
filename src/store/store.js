import { createStore, combineReducers } from 'redux';
import RatesReducer from './rates';
import UserReducer from './user';


export const store = createStore(combineReducers({
	user: UserReducer,
	rates: RatesReducer
}));