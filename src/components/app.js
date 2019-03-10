import React, { Component } from 'react';
import Logo from './logo';
import Search from './search';
import Results from './results';

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<Logo/>
				<Search/>
				<Results/>
			</div>
		);
	}
}
