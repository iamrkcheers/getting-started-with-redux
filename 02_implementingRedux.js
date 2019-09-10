import { createStore } from 'redux';

// reducer function
const counter = (prevState = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return prevState + 1;
		case 'DECREMENT':
			return prevState - 1;
		default:
			return 0;
	}
}

// creating store
const store = createStore(counter);

console.log('1)',store.getState());

// dispatching action
store.dispatch({type: 'INCREMENT'});
console.log('2)',store.getState());

// registering a callback after an action has been dispatched using 'subscribe'
const render = () => {
	console.log(store.getState());
}
store.subscribe(render);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: ''});
store.dispatch({type: 'DECREMENT'});