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
	return {
		type: 'REQUEST_LOGIN',
		userObj
	}
}

// removing the user
export function requestLogout(userObj) {
	return {
		type: 'REQUEST_LOGOUT'
	}
}

// tender