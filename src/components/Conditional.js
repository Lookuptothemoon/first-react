import React from "react"
import load from '../imgs/loading.gif'
import './Conditional.css'

class Conditional extends React.Component {
	render() {
		// check if loading
		if(this.props.isLoading === true){
			return (
				<div className="load-wrapper">
					<p>Loading ...</p>
					<img src={load} className="load-img" alt="loading" />
				</div>
			)
		}
		// else
		return (
			<div className="after-load-wrapper">
				<p>Finished loading!</p>
				<img src={this.props.dog.url} height="300" />
			</div>
		)
	}
}

export default Conditional