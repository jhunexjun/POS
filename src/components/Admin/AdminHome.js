import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import LogoutModal from '../LogoutModal';

class AdminHome extends Component {
	render() {
		return (<div>
					<LogoutModal {...this.props} />
					<AdminNavBar />
					{React.cloneElement(this.props.children, this.props)}
				</div>
		)
	}
}

export default AdminHome;