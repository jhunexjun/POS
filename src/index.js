import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import registerServiceWorker from './registerServiceWorker';
import { saveState } from './localStorage';
import throttle from 'lodash/throttle';

import App from './components/App';
import MainIndex from './components/MainIndex';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

import Profile from './components/Admin/Profile';
import AdminHomeComponent from './components/Admin/AdminHomeComponent';

store.subscribe(throttle(() => {
	saveState(store.getState())
}, 1000));

const routers = (
	<Provider store={store}>
		<Router history={history}>
		    <Route path="/" component={App}>
		    	<IndexRoute component={MainIndex}></IndexRoute>
		    	<Route path="/home" component={Home} />
		    	<Route path="/about" component={About} />
		    	<Route path="/login" component={Login} />

		    	{/*admin pages*/}
		    	<Route path="/admin" component={AdminHomeComponent} />
		    	<Route path="/admin/profile" component={Profile} />
		    </Route>
		</Router>
	</Provider>
 );

render(routers, document.getElementById('root'));
registerServiceWorker();
