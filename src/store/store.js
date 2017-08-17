import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { loadState } from '../localStorage';

import rootReducer from '../reducers/index';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;