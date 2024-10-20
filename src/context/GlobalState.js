import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// This is the global state where we reference each variable and its action in one stop , and then export it to a component whenever;

// InitialState
// Any global states goes into this object state
// Pass this data down (key) and any action that will be done as value; (e.g add, delete, edit, etc)

const initialState = {
	transactions: [
		// 	{ id: 1, text: "Flower", amount: -20 },
		// 	{ id: 2, text: "Salary", amount: 300 },
		// 	{ id: 3, text: "Book", amount: -10 },
		// 	{ id: 4, text: "Camera", amount: 150 }, // Dummy transactions
	],
};

//Create context;

export const GlobalContext = createContext(initialState); // Initial state as argument for creating context for the action and whatever our objects is, it will be pass as argument;

// Provider component;
// So we can package this and pass the global files (this file) to other files to use;

// The children is essentially what we are passing, so in this case it would be the components in the app.js  such as:
//	<Balance />
{
	/* <IncomeExpenses />

<TransactionList />

<AddTransaction /> */
}

// They are being deconstructed as children (each component as 1 called children) to be passed in as parameters to use in other files;

export const GlobalProvider = ({ children }) => {
	// Whenever we call upon the reducer or the starting state (components in this cases ) we dispatch it to do something with thee state
	const [state, dispatch] = useReducer(AppReducer, initialState);
	// Takes in both these argument type;

	// Actions
	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				// How we access the state of the object initial and action
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
			{/* This is our parameter of whatever components we have */}
			{/* Providers provides any state or any actions to components or the children */}
		</GlobalContext.Provider>
	);
};
