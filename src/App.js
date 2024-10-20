import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";

import { TransactionList } from "./components/TransactionList";

import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<Header />
			{/* Expense container for balance; */}
			<div className="container">
				<Balance />
				<IncomeExpenses />

				<TransactionList />

				<AddTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
