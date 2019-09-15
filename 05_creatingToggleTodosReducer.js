import expect, { toEquals } from 'expect';
import deepFreeze from 'deep-freeze';

const todos = (prevState = 0, action) => {
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
		case 'TOGGLE_TODOS':
			prevState.map(todo => {
				if (todo.id !== action.id)
					return todo;
				else
					return {
						...todo,
						todo.completed = !todo.completed
					}
			});
		default:
			return prevState;
	}
}

const testAddTodo = () => {
	const stateBefore = [],
	const action = {
		id: 0,
		type: 'ADD_TODOS',
		text: 'Do something !'
	}
	const stateAfter = [{
		id: 0,
		text: 'Do something !',
		completed: false
	}]

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore, action)).toEquals(stateAfter);
}

const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Do something !',
			completed: false
		},
		{
			id: 1,
			text: 'Do something, please !',
			completed: false
		}
	],
	const action = {
		id: 1,
		type: 'TOGGLE_TODOS'
	}
	const stateAfter = [
		{
			id: 0,
			text: 'Do something !',
			completed: false
		},
		{
			id: 1,
			text: 'Do something, please !',
			completed: true
		}
	]

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore, action)).toEquals(stateAfter);
}

testAddTodo();
testToggleTodo();

console.log('TESTS PASSED !');