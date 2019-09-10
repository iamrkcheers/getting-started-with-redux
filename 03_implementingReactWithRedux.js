import createStore from "redux";

const counter = (prevState = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return prevState + 1;
		case "DECREMENT":
			return prevState - 1;
		default:
			return 0;
	}
};

const store = createStore(counter);

const Counter = ({ value, onIncrement, onDecrement }) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const render = () => {
	ReactDom.render(
		<Counter
			store={store.getState()}
			onIncrement={store.dispatch({ type: "INCREMENT" })}
			onDecrement={store.dispatch({ type: "DECREMENT" })}
		/>,
		document.getElementById("root")
	);
};

store.subscribe(render);
render();
