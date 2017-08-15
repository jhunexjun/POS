import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import basket from './basket';
import currentUser from './currentUser';

const rootReducer = combineReducers({items, basket, currentUser, routing: routerReducer});

export default rootReducer;