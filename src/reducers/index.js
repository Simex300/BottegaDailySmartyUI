import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import post from './postReducer';

const rootReducer = combineReducers({
	form,
	post  
});

export default rootReducer;