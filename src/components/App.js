import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapsStateToProps(state) {
	return {
		basket: state.basket,
		isAuthenticated: state.isAuthenticated,
		currentUser: state.currentUser
	}
}

function mapsDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapsStateToProps, mapsDispatchToProps)(Main);

export default App;