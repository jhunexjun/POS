/*import request from 'request';
import fakeweb from 'node-fakeweb';*/
/*const request = require('request');
const fakeweb = require('node-fakeweb');*/

// add item to the basket
export function addItem(itemObj, qty) {
	return {
		type: 'ADD_ITEM_TO_BASKET',
		barcode: itemObj.barcode,
		itemName: itemObj.itemName,
		price: itemObj.price,
		qty
	}
}

// remove item from the basket
export function removeItem(index) {
	return {
		type: 'REMOVE_ITEM_FROM_BASKET',
		index
	}
}

// remove all from the basket
export function removeAllItems() {
	return {
		type: 'REMOVE_ALL_ITEMS'
	}
}

// attach the user

export function requestLogin(userObj) {
	/*fakeweb.allowNetConnect = true;
	fakeweb.registerUri({uri: 'http://www.testing.com:80/', body: 'Hello!'});
	request.post({uri: 'http://www.testing.com:80/'}, (err, resp, body) => {
	console.log(body);
	});*/
	

	return {
		type: 'REQUEST_LOGIN',
		userObj
	}
}

export function receivedLogin(userObj) {
	return {
		type: 'RECEIVED_LOGIN',
		idToken: userObj.token
	}
}

// removing the user
export function requestLogout(userObj) {
	return {
		type: 'REQUEST_LOGOUT'
	}
}

// tender