function currentUser(state = {}, action) {
	switch (action.type) {
		case 'REQUEST_LOGIN' :
			return [...state, {
				username: action.userObj.username
			}];
		case 'REQUEST_LOGOUT' :
			return [];
		default:
			return state;
	}
}

export default currentUser;