import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
export const TransactionList = () => {
	// using the context method where we pass in the GlobalContext/GlobalState to specify the data to use which all we have in there are transactions. So now we can use this in our component
	const { transactions } = useContext(GlobalContext);

	console.log(transactions);
	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{/* Basically looping through the array of transactions */}
				{transactions.map((transaction) => (
					<Transaction
						key={transaction.id}
						// Specify what it is rendering;
						transaction={transaction}
					/>
				))}
			</ul>
		</>
	);
};
