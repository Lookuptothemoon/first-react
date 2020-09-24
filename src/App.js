import React, {Component} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Conditional from "./components/Conditional"
import Form from "./components/Form"
import MemeGenerator from "./components/MemeGenerator"
import './App.css'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoading: true,
			dog: null
		}
	}

	componentDidMount() {
		// get random dog pic from dog api
		fetch("https://random.dog/woof.json")
			.then(response => response.json())
			.then(data => {
				this.setState({
					dog: data
				})
			})

		// wait 1s before posting data to app
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1000)
	}

	render() {
	  return (
	    <div className="App">
			<Header />
			<div className="wrapper">
		    	<Conditional isLoading={this.state.isLoading} dog={this.state.dog} />
		  	</div>
		  	<Form />
			<Main />
			<MemeGenerator />
			<Footer />
	    </div>
	  );
	}
}

export default App;
