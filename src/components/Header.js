import React from 'react';
import logo from '../imgs/logo.svg';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		);
	}
}

export default Header;
