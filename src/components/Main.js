import React from 'react'
import ToDoItem from './ToDoItem'
import Time from './Time'
import data from './../data'
import './Main.css'

class Main extends React.Component {
	constructor() {
		super()
		// state variables
		this.state = {
			toDos: data,
			numUndone: 0
		}
		// binding functions
		this.changeChecked = this.changeChecked.bind(this)
	}

	// handle ToDoItem change (check if uncheck and vice versa)
	changeChecked(id){
		console.log("changed", id)
		this.setState( prevState => {
			const updatedToDos = prevState.toDos.map( prevToDo => {
				if( prevToDo.id === id ){
					prevToDo.completed = !prevToDo.completed
				}
				return prevToDo
			})
			return {
				toDos: updatedToDos
			}
		})
	}

	render(){
		// map of to do items from JSON file
		const toDoItems = 	this.state.toDos.map( todo => <ToDoItem 
								key={todo.id}
								item={todo}
								changeChecked={this.changeChecked} />
							)
		// check num checked off
		let numToDo = 0
		let todos = this.state.toDos
		for(let i=0; i<todos.length; i++){
			if(todos[i].completed === false){
				numToDo++
			}
		}

		// return HTML
		return(
			<div className="main">
				<Time />
				{ /* To Do Item */ }
				<section className="todo-wrapper">
					{ 
						//  print message based on if todos completed or not
						numToDo > 0 ? 
						<p className="center" id="undone-notice">You have {numToDo} item(s) left to do</p> :
						<p className="center" id="done-notice">You complete all  of your to dos. Yay!</p> 
					}
					<h3 className="center">To Do List</h3>
					<div className="todo-content">
						{toDoItems}
					</div>
				</section>
			</div>
		);
	}
}

export default Main;
