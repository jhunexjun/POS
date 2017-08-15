import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

// import App from './components/App';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

import Profile from './components/Admin/Profile';
import AppAdmin from './components/Admin/AppAdmin';
import AdminHomeComponent from './components/Admin/AdminHomeComponent';


const routers = (
	<Provider store={store}>
		<Router history={history}>
		    <Route path="/" component={Main}>
		    	<Route path="/home" component={Home} />
		    	<Route path="/about" component={About} />
		    	<Route path="/login" component={Login} />
		    </Route>
		    <Route path="/admin" component={AppAdmin}>
		    	<IndexRoute component={AdminHomeComponent}></IndexRoute>
		    	<Route path="/admin/profile" component={Profile} />
		    </Route>
		</Router>
	</Provider>
 );

render(routers, document.getElementById('root'));
registerServiceWorker();
