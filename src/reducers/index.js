import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import basket from './basket';
import user from './user';

const rootReducer = combineReducers({items, basket, user, routing: routerReducer});

export default rootReducer;