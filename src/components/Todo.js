import React, { Component } from 'react';

export class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = (e) => {
		this.props.toggleComplete(e.target.id);
		console.log(e.target);
	};

	render() {
		return (
			<div
				id={this.props.id}
				onClick={this.handleClick}
				className={this.props.completed ? 'completed' : ''}
			>
				Name: {this.props.name}
			</div>
		);
	}
}

export default Todo;
