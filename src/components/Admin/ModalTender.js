import React, { Component } from 'react';
let isEmpty = require('lodash.isempty');

class ModalTender extends Component {
	constructor(props) {
		super(props);

		this.handleYes = this.handleYes.bind(this);
	}

	componentWillMount() {
		if (isEmpty(this.props.currentUser))
			this.props.router.push('/');
	}

	componentDidMount() {
		this.refs.btnTenderAmt.focus();
	}

	handleYes() {
		this.props.onConfirmation();		
		this.refs.btnTenderNo.click();
	}

	render() {
		return (
			<div className="modal fade" id="modalTender" tabIndex="-2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
				    <div className="modal-content">
				      	<div className="modal-header">
					        <h5 className="modal-title">Tender</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
				      	</div>
				      	<div className="modal-body">
				      		<div className="container-fluid">
				      			<div className="row">
				      				<div className="col-md-4"></div>
				      				<div className="col-md-2">Total</div>
				      				<div className="col-md-4 ml-auto">
				      					<h3>{this.props.grandTotal}</h3>
				      				</div>
				      			</div>
				      			<div className="row">
				      				<div className="col-md-4"></div>
				      				<div className="col-md-4">Tender Amount</div>
				      				<div className="col-md-4 ml-auto">
				      					<input ref="btnTenderAmt" type="textbox" className="form-control" />
				      				</div>
				      			</div>
				      		</div>
				      	</div>
				      	<div className="modal-footer">
					        <button onClick={this.handleYes} type="button" className="btn btn-primary">Yes</button>
					        <button ref="btnTenderNo" type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
				      	</div>
				    </div>
			  	</div>
			</div>
		);
	}
}

export default ModalTender;