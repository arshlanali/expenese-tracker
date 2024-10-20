import React, { useContext } from "react";

// every time we want to reuse the data or objects to pass in we import ⬇️

import { GlobalContext } from "../context/GlobalState";

// We also have to use the GlobalContext whenever we import the context, that is try to use the method UseState;
// RAFC
export const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	// Mapping what transaction is when we pass the object through the state;
	// We need to get the amount here
	const amounts = transactions.map((transaction) => transaction.amount);

	// console.log(amounts);
	// Getting the total with reduce method
	// toFixed() is decimal places
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<>
			<h4>Your Balance</h4>
			<h1>₹{total}</h1>
		</>
	);
};
