function basket(state = [], action) {
	switch (action.type) {
		case 'ADD_ITEM_TO_BASKET' :
			return [...state, {
				barcode: action.barcode,
				itemName: action.itemName,
				price: action.price,
				qty: action.qty
			}];
		case 'REMOVE_ITEM_FROM_BASKET':
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];
		case 'REMOVE_ALL_ITEMS' :
			return [];
		default:
			return state;
	}
}

export default basket;