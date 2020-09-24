import React from 'react';
import './ToDoItem.css';


class ToDoItem extends React.Component {
	render(){
		return (
			<div className="todo-item">
				<input 
					id="todoitem"
					type="checkbox"
					checked={this.props.item.completed}
					onChange={ () => this.props.changeChecked(this.props.item.id) }
				/>
				<label htmlFor="todo-item" id="todo-label">
					{ this.props.item.completed ? 
						<span className="doneToDo">{this.props.item.label}</span> :
						<span>{this.props.item.label}</span>
					}
					<span className="urgent"> {"!".repeat(this.props.item.urgency)}</span>
				</label>
			</div>
		);
	}
}

export default ToDoItem;
