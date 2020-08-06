import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [{ name: 'Brian', id: 1, completed: false }] };
	}

	addItem = (item) => {
		this.setState({ items: [...this.state.items, item] });
	};

	toggleComplete = (id) => {
		const newItems = this.state.items.map((item) => {
			if (item.id === parseInt(id)) {
				return { ...item, completed: !item.completed };
			}
			return item;
		});
		this.setState({ items: newItems });
	};

	clearCompleted = () => {
		const notCompleted = this.state.items.filter(
			(item) => item.completed === false
		);
		this.setState({ items: notCompleted });
	};

	render() {
		return (
			<div>
				<TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
				<TodoList
					items={this.state.items}
					toggleComplete={this.toggleComplete}
				/>
			</div>
		);
	}
}

export default App;
