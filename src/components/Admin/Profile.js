import React, { Component } from 'react';
let isEmpty = require('lodash.isempty');

class Profile extends Component {
	componentWillMount() {
		if (isEmpty(this.props.currentUser))
			this.props.router.push('/');
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h2>Welcome {this.props.currentUser[0].fName + ' ' +this.props.currentUser[0].lName}</h2>
				</div>
			</div>
		)
	}
}

export default Profile;
