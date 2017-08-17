import React, { Component } from 'react';
import '../../styles/custom.css';
import RowItem from './RowItem';
import items from '../../data/items';
import Alert from './Alert';
import ModalCancel from './ModalCancel';
import ModalTender from './ModalTender';
let isEmpty = require('lodash.isempty');

class AdminHomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barcode: '',
			qty: 1,
			showLogoutAlert: false,
			itemCount: 0
		};

		this.handleBarcodeInput = this.handleBarcodeInput.bind(this);
		this.handleQtyInput = this.handleQtyInput.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
		this.handleYesOfModalTender = this.handleYesOfModalTender.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}

	componentWillMount() {
		if (isEmpty(this.props.currentUser))
			this.props.router.push('/');
	}

	componentDidMount() {
		this.setState({itemCount: this.props.basket.length});
	}

	handleBarcodeInput(e) {
		this.setState({barcode: e.target.value, showLogoutAlert: false});
	}

	handleQtyInput(e) {
		this.setState({qty: e.target.value, showLogoutAlert: false});
	}

	handleEnter() {
		this.setState({showLogoutAlert: false});
		let that = this;

		const obj = items.filter(function(obj) {
			return obj.barcode === that.state.barcode;
		})[0];

		if (typeof obj !== 'undefined') {
			let itemObj = {
				barcode: obj.barcode,
				itemName: obj.itemName,
				price: obj.price
			};

			this.props.addItem(itemObj, this.state.qty);
			this.setState({barcode: '',
							qty: 1,
							itemCount: this.state.itemCount + 1
			});
		} else {
			this.setState({showLogoutAlert: true});
		}

		this.refs.barcode.focus();
	}

	handleCancel() {
		this.props.removeAllItems();
		this.setState({itemCount: 0})
		this.refs.barcode.focus();
	}

	handleOnKeyDown(e) {
		if (e.keyCode === 13)
			this.handleEnter();
	}

	handleYesOfModalTender() {
		this.props.removeAllItems();
		this.setState({itemCount: 0})
		this.refs.barcode.focus();
	}

	handleRemoveItem(i) {
		this.props.removeItem(i);
		this.setState({itemCount: this.state.itemCount - 1})
	}

	render() {
		let grandTotal = this.props.basket.map((obj) => {
			return obj.price * obj.qty;
		});
		grandTotal = grandTotal.reduce((sum, value) => {
			return sum + value;
		}, 0.00);
		grandTotal = grandTotal.toFixed(2);

		return (
			<div className="container">
				<ModalCancel onConfirmation={this.handleCancel} currentUser={this.props.currentUser} />
				<ModalTender onConfirmation={this.handleYesOfModalTender} {...this.props} grandTotal={grandTotal} />
				<div className="row voffset2">
					<div className="col"></div>
					<div className="col-4">
						{ this.state.showLogoutAlert ? <Alert text='Item not found!' /> : null }
					</div>
					<div className="col"></div>
					<div className="col"></div>
				</div>
				<div className="row">
					<div className="col col-md-1">
					</div>
					<div className="col col-md-1">
						<input className='form-control' size='5' placeholder='Qty' value={this.state.qty} onChange={this.handleQtyInput} />
					</div>
					<div className="col col-md-5">
						<input ref="barcode" value={this.state.barcode} onChange={this.handleBarcodeInput} className="form-control" placeholder="Enter barcode here." onKeyDown={this.handleOnKeyDown} autoFocus />
					</div>
					<div className="col col-md-2"><button onClick={this.handleEnter} type="button" className="btn btn-outline-primary">Enter</button></div>
				</div>
				<div className="row voffset4">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<table className="table table-sm">
							<thead>
								<tr>
									<th>#</th>
									<th>Barcode</th>
									<th>Item</th>
									<th>Price</th>
									<th>Qty</th>
									<th>Sub-total</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tbody>
								{this.props.basket.map((item, i) => <RowItem onHandleRemoveItem={this.handleRemoveItem} {...this.props} key={i} i={i} item={item} />)}
							</tbody>
						</table>
					</div>
					<div className="col-md-8"></div>
				</div>
				<div className="row voffset4">
					<div className="col-md-4 ml-md-auto">Total: <strong>{grandTotal}</strong></div>
				</div>
				<div className="row voffset4">
					<div className="col"></div>
					<div className="col">
						<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={this.state.itemCount ? "#modalTender" : ""} disabled={!this.state.itemCount}>Tender</button>
						<button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target={this.state.itemCount ? "#modalCancel" : ""} disabled={!this.state.itemCount}>Cancel</button>
					</div>
					<div className="col"></div>
				</div>
			</div>
		)
	}
}

export default AdminHomeComponent;