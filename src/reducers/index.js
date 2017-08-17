import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import basket from './basket';
import isAuthenticated from './isAuthenticated';
import currentUser from './currentUser';

const reducers = {basket, isAuthenticated, currentUser, routing: routerReducer};

const rootReducer = combineReducers(reducers);

export default rootReducer;