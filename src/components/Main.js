import React, { Component } from 'react';
import NavBar from './Header/NavBar';
import AdminNavBar from './Admin/AdminNavBar';
import LogoutModal from './LogoutModal';

class Main extends Component {
	render() {
		let menuComponent = null;
		let logOutComponent = null;

		if (this.props.currentUser.length > 0) {
			logOutComponent = <LogoutModal {...this.props} />;
			menuComponent = <AdminNavBar />;
		} else {
			menuComponent = <NavBar />;
		}

		return (
			<div>
				{logOutComponent}
				{menuComponent}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default Main;
