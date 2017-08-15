import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

// import Users from './data/Users';
import items from './data/items';

const defaultState = {
	items,
	basket: [],
	user: {id: '01111'}
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;