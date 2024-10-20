import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	// Ternary if statement;
	const sign = transaction.amount < 0 ? "-" : "+";
	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			{/* We have access to each individual transaction value */}
			{transaction.text}{" "}
			<span>
				{/* Make this an absolute number at first so there won't be 2 negatives */}
				{sign}₹{Math.abs(transaction.amount)}
			</span>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className="delete-btn"
			>
				x
			</button>
		</li>
	);
};
