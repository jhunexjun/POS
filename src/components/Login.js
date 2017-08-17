import React, { Component } from 'react';
import users from '../data/users';
import Alert from './Alert';

var bcrypt = require('bcryptjs');


class Login extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			errorLogIn: false,
			errorMessage: ''
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		// this assumes the http request.
		const inputUsername = this.refs.username.value.trim();
		const inputPw = this.refs.password.value.trim();
		let foundUser = false;

		users.forEach((user) => {
			if (user.username === inputUsername && bcrypt.compareSync(inputPw, user.password)) {
				foundUser = true;
			}
		});

		if (foundUser) {
			this.props.requestLogin({username: inputUsername});
			this.props.router.push('/admin');
		} else {
			this.setState({errorLogIn: true, errorMessage: 'Invalid username/password.'});
		}

	}

	render() {
		return (
			<div className="container">
				<div className="row voffset2">
					<div className="col"></div>
					<div className="col">{ this.state.errorLogIn ? <Alert text={this.state.errorMessage} /> : null }</div>
					<div className="col"></div>
				</div>
				<div className="row voffset3">
					<div className="col"></div>
					<div className="col">
						<form action="admin" method="POST">
						  <div className="form-group">
						    <label htmlFor="exampleInputEmail1">Email address</label>
						    <input ref="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
						    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputPassword1">Password</label>
						    <input ref="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
						  </div>
						  <div className="form-check">
						    <label className="form-check-label">
						      <input type="checkbox" className="form-check-input" />
						      Stay signed in
						    </label>
						  </div>
						  <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
					<div className="col"></div>
				</div>
			</div>
		);
	}
}

export default Login;