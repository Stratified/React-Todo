import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div>
			{props.items.map((todo) => (
				<Todo
					name={todo.name}
					key={todo.id}
					id={todo.id}
					completed={todo.completed}
					toggleComplete={props.toggleComplete}
				/>
			))}
		</div>
	);
};

export default TodoList;
