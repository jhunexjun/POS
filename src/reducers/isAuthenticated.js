function isAuthenticated(state = [], action) {
	switch (action.type) {
		case 'REQUEST_LOGIN' :
			return [...state, isAuthenticated: false];
		case 'REQUEST_LOGOUT' :
			return [];
		default:
			return state;
	}
}

export default isAuthenticated;