import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.requestLogin({username: this.refs.username.value});
		this.props.router.push('/admin');
	}

	render() {
		return (
			<div className="container">
				<div className="row voffset4">
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
						    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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