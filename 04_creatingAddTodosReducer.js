import expect, { toEqual } from 'expect';
import deepFreeze from 'deep-freeze';

const todos = (prevState = [], action) => {
	switch(action.type) {
		case 'ADD_TODOS':
			return [
				...prevState,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		default:
			return state;
	}
}

const testAddTodos = () => {
	const stateBefore = [];
	const action = {
		id: 0,
		type: 'ADD_TODOS',
		text: 'Todos added !'
	};
	const stateAfter = [{
		id: 0,
		text: 'Todos added !',
		completed: false
	}];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore,action)).toEqual(stateAfter);
}

testAddTodos();
console.log('TESTS PASSED !');