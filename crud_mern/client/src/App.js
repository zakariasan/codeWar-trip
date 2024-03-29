import React from "react";
import "./App.css";

function App() {
	const [foodName, setFoodName] = React.useState("");
	const [days, setDays] = React.useState(0);

	const addFood = () => {
		fetch("http://localhost:5000/insert", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				foodName: foodName,
				days: days,
			}),
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<div className="App">
			<h1>Crud of Food just try </h1>
			<label htmlFor="FoodName">Food Name :</label>
			<input
				type="text"
				onChange={(e) => {
					setFoodName(e.target.value);
				}}
			/>

			<label htmlFor="FoodName">Days since You Ate It : </label>
			<input
				type="number"
				onChange={(e) => {
					setDays(e.target.value);
				}}
			/>
			<button onClick={addFood}>Submit</button>
		</div>
	);
}

export default App;
