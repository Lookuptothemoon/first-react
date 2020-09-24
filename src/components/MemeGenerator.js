import React from 'react'
import "./MemeGenerator.css"

class MemeGenerator extends React.Component {
	constructor() {
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "https://i.imgflip.com/1bij.jpg",
			memeImgs: []
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState({ [name]: value })
	}

	handleSubmit(event) {
		event.preventDefault()
		const rand = Math.floor(Math.random() * this.state.memeImgs.length)
		const imgURL = this.state.memeImgs[rand].url
		this.setState({ randomImg: imgURL })
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(response => {
			const {memes} = response.data
			this.setState({ memeImgs: memes })
		})
	}

	render() {
		return (
			<div className="meme-wrapper">
				<h1>Meme Generator</h1>
				<div className="meme-content">
					<img  className="meme-img" src={this.state.randomImg} />
					<h1 className="top-text"> {this.state.topText} </h1>
					<h1 className="bottom-text"> {this.state.bottomText} </h1>
				</div>

				

				<form className="meme-form" onSubmit={this.handleSubmit}>
					<label>Top Text: </label>
					<input 
						type="text"
						name="topText"
						placeholder="Top Text"
						value={this.state.topText}
						onChange={this.handleChange}
					></input> <br/>

					<label>Bottom Text: </label>
					<input 
						type="text"
						name="bottomText"
						placeholder="Bottom Text"
						value={this.state.bottomText}
						onChange={this.handleChange}
					></input> <br/>

					<center> <button className="generate-button"> Generate!</button> </center>
				</form>
			</div>
		)
	}
}

export default MemeGenerator;
