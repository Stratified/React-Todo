import React from 'react';
import TodoList from './TodoList';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: '' };
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newItem = { name: this.state.item, id: Date.now(), completed: false };
		this.props.addItem(newItem);
		console.log(newItem);
		this.setState({ item: '' });
	};

	handleChange = (e) => {
		this.setState({ item: e.target.value });
	};

	clickHandler = (e) => {
		e.preventDefault();
		this.props.clearCompleted();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						onChange={this.handleChange}
						value={this.state.item}
					/>
					<button type='submit'>Add</button>
					<button onClick={this.clickHandler}>Clear All</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
