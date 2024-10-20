import React, { useState, useContext , useRef} from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
	const [text, setText] = useState("");
	// hooks -
	// 1. import useState
	// 2. [set a start state(text), then what we are manipulating ] = useState(default argument)
	//3. Set those useState values into variables of what state corresponded of start stat in the []
	// example : text with values of value = {text}... etc...
	//4. onChange = {() => {e.value.target.text}} to set the text of whoever is interacting with it;

	const [amount, setAmount] = useState(0);
	// const inputFlagRef = useRef(null);

	const { addTransaction } = useContext(GlobalContext);

	

	// when form is submitted, do this with the transaction
	const onSubmit = (e) => {
		e.preventDefault();
		// if(inputFlagRef.current.value === 'expense'){
		// 	amount = -amount;
		// }

		const newTransaction = {
			//Generating an Id at random
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: +amount
		};

		addTransaction(newTransaction);

		setText(""); // clearing text field after submit
		setAmount(0); // clearing amount field after submit
	};
	return (
		<>
			{/* {" "} */}
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit} id="form">
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						value={text}
						onChange={
							// Function to target what is being type in as a value {}
							(e) => setText(e.target.value)
						}
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
						{/* <select name="flag" ref ={inputFlagRef}>
							<option value="income">Income</option>
							<option value="expense">Expense</option>
						</select> */}
					<input
						type="number"
						value={amount}
						// onChange={handleAmount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};
