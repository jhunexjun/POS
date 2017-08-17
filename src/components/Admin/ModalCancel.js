import React, { Component } from 'react';
let isEmpty = require('lodash.isempty');

class ModalCancel extends Component {
	constructor(props) {
		super(props);

		this.handleYes = this.handleYes.bind(this);
	}

	componentWillMount() {
		if (isEmpty(this.props.currentUser))
			this.props.router.push('/');
	}

	handleYes() {
		this.props.onConfirmation();
		this.refs.btnCancelNo.click();
	}

	render() {
		return (
			<div className="modal fade" id="modalCancel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
				    <div className="modal-content">
				      	<div className="modal-header">
					        <h5 className="modal-title" id="exampleModalLabel">Question</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
				      	</div>
					      <div className="modal-body">
					        Remove all items on the list?
					      </div>
				      	<div className="modal-footer">
					        <button onClick={this.handleYes} type="button" className="btn btn-primary">Yes</button>
					        <button ref="btnCancelNo" type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
				      	</div>
				    </div>
			  	</div>
			</div>
		);
	}
}

export default ModalCancel;