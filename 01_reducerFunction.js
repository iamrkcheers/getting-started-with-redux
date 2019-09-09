import expect, { toEqual } from 'expect';

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

expect(
	counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
	counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
	counter(2, {type: 'DECREMENT'})
).toEqual(1);

expect(
	counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
	counter(0, {type: 'SOMETHING ELSE'})
).toEqual(0);

expect(
	counter(undefined, {})
).toEqual(0);

console.log('TESTS PASSED !');