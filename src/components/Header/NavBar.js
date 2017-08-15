import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
			    <Link className="navbar-brand" to="/">POS</Link>
			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item active">
			        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to="/about">About</Link>
			      </li>
			    </ul>
		      <ul className="nav navbar-nav navbar-right">
		      	<li className="nav-item">
		      		<Link to="/login" className="nav-link">Login</Link>
		      	</li>
		      </ul>
			  </div>
			</nav>
		);
	}
}

export default NavBar;