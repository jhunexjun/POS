import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import AdminHome from './AdminHome';

function mapsStateToProps(state) {
	return {
		items: state.items,
		basket: state.basket,
		user: state.user
	}
}

function mapsDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const AppAdmin = connect(mapsStateToProps, mapsDispatchToProps)(AdminHome);

export default AppAdmin;