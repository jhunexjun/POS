import React, { Component } from 'react';

class LogoutModal extends Component {
	handleYes() {
		this.props.removeAllItems();
		this.props.requestLogout();
		this.refs.btnNo.click();
		this.props.router.push('/');
	}

	render() {
		return (
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
				    <div className="modal-content">
				      	<div className="modal-header">
					        <h5 className="modal-title" id="exampleModalLabel">Question</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
				      	</div>
					      <div className="modal-body">
					        Are you sure you want to exit?
					      </div>
				      	<div className="modal-footer">
					        <button onClick={this.handleYes.bind(this)} type="button" className="btn btn-primary">Yes</button>
					        <button ref="btnNo" type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
				      	</div>
				    </div>
			  	</div>
			</div>
		);
	}
}

export default LogoutModal;