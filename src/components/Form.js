import React, {Component} from 'react'
import "./Form.css"

class Form extends Component {
	constructor() {
		super()
		this.state = {
			firstName: "",
			lastName: "",
			comment: "",
			isFriendly: false,
			isKind: false,
			flavor: "",
			color: ""
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const {name, value, type, checked} = event.target
		type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="form-wrapper">
				<p className="form-feedback">Your name is: {this.state.firstName} {this.state.lastName}</p>
				<p className="form-feedback">Comment: {this.state.comment}</p>
				<p className="form-feedback"> You are {this.state.isFriendly ? "friendly" : "not friendly"} </p>
				<p className="form-feedback"> You are {this.state.isKind ? "kind" : "not kind"} </p>
				<p className="form-feedback"> Your like {this.state.flavor} ice cream </p>
				<p className="form-feedback"> Your favorite color is {this.state.color} </p>

				<form className="form">
					<input 
						type="text" 
						name="firstName" 
						value={this.state.firstName} 
						placeholder="First Name" 
						onChange={this.handleChange} 
					/> <br/>

					<input 
						type="text" 
						name="lastName" 
						value={this.state.lastName} 
						placeholder="Last Name" 
						onChange={this.handleChange}
					/> <br/>

					<textarea name="comment" value={this.state.comment} placeholder="Write something ..." onChange={this.handleChange} /> <br/>

					<label>Are you friendly? </label>
					<input
						type="checkbox"
						name="isFriendly"
						checked={this.state.isFriendly}
						onChange={this.handleChange}
					/> <br/>
					<label>Are you kind?</label>
					<input
						type="checkbox"
						name="isKind"
						checked={this.state.isKind}
						onChange={this.handleChange}
					/> <br/>

					{/* radio buttons */}
					<p>What flavor ice cream do you like?</p>
					<input
						type="radio"
						name="flavor"
						value="vanilla"
						checked={this.state.flavor === "vanilla"}
						onChange={this.handleChange}
					/> <label>Vanilla</label> <br/>
					<input
						type="radio"
						name="flavor"
						value="chocolate"
						checked={this.state.flavor === "chocolate"}
						onChange={this.handleChange}
					/> <label>Chocolate</label> <br/>
					<input
						type="radio"
						name="flavor"
						value="strawberry"
						checked={this.state.flavor === "strawberry"}
						onChange={this.handleChange}
					/> <label>Strawberry</label> <br/><br/>

					{/* dropdown options */}
					<label>Favorite Color:</label>
					<select
						value={this.state.color}
						name="color"
						onChange={this.handleChange}
					>
						<option value="">Choose a color</option>
						<option value="red">Red</option>
						<option value="orange">Orange</option>
						<option value="yellow">Yellow</option>
						<option value="green">Green</option>
						<option value="blue">Blue</option>
						<option value="purple">Purple</option>
					</select>
				</form>
			</div>
		)
	}
}

export default Form