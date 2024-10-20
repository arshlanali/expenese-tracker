/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
	// action.type is like an ID, like add transaction, deletion type transaction
	switch (action.type) {
		// Reducer is change a state of the app and send that state to your components;
		// OUR ACTIONS to delete, so we need to create a case for this;

		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transactions) => transactions.id !== action.payload
				), // Send all new transactions to components to use EXCEPT the one deleted, that way our components will have new data to share
			};

		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [action.payload, ...state.transactions], // Takes all value in the array and put them here .
				// In addition adding the action.payload data to our array.
			};
		// When its default, return state as is;
		default:
			return state;
	}
};

// specify the application state changes in response to certain actions to our context
// Point of this is that it allows other files to have access to data easily instead of passing through for each file manually; So in this case, transactions data is being shared to other components;
