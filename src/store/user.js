const initialState = {
	name: 'Nick Buzzy',
	loggedIn: false
}

export const userReducer = (state = initialState, action) => {
	return state;
}

//selectors
export const getName = state => state.user.name;