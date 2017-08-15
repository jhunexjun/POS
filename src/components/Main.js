import React, { Component } from 'react';
import NavBar from './Header/NavBar';

class Main extends Component {
	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}

export default Main;
