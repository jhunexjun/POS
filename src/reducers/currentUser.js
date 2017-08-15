function currentUser(state = [], action) {
	switch (action.type) {
		case 'ATTACH_USER' :
			return [...state, {
				id: action.userObj.id,
				userName: action.userObj.userName,
			}];
		case 'REMOVE_ITEM_FROM_BASKET':
			return state;
		default:
			return state;
	}
}

export default currentUser;