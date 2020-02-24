import  React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo'


class TodosContainer extends Component {
	renderTodos = () => {
		return this.props.todos.map((todo, i) => <Todo key={i} todo={todo} />)
	}
	render() {
		console.log(this.props.todos)
		return (
			<React.Fragment>
				{this.renderTodos()}
			</React.Fragment>
		)
	}
}

export default connect(state => ({ todos: state.todos }))(TodosContainer)