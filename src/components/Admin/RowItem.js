import React, { Component } from 'react';

class RowItem extends Component {
	render() {
		let { barcode, itemName, price, qty } = {...this.props.item};

		return (
			<tr>
				<th scope="row">{this.props.i + 1}</th>
				<td>{barcode}</td>
				<td>{itemName}</td>
				<td>{price}</td>
				<td>{qty}</td>
				<td>{(price * qty).toFixed(2)}</td>
				<td><button onClick={this.props.removeItem.bind(null, this.props.i)} type="button" className="btn btn-danger btn-sm">X</button></td>
			</tr>
		)
	}
}

export default RowItem;