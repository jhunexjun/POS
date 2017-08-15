import React, { Component } from 'react';

class CancelModal extends Component {
	constructor(props) {
		super(props);
		this.handleYes = this.handleYes.bind(this);
	}

	handleYes() {
		this.props.onCancel();
		this.refs.btnNo.click();
	}

	render() {
		return (
			<div className="modal fade" id="cancelModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
					        <button ref="btnNo" type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
				      	</div>
				    </div>
			  	</div>
			</div>
		);
	}
}

export default CancelModal;