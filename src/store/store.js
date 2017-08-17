import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { loadState } from '../localStorage';

import rootReducer from '../reducers/index';

// import Users from './data/Users';

const persistedState = loadState();

/*const defaultState = {
	items,
	basket: [],
	isAuthenticated: false,
	currentUser: []
};*/

const store = createStore(rootReducer, persistedState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;