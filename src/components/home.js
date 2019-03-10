import React, { Component } from 'react';
import Logo from './logo';
import Search from './search';
import RecentPosts from './recentPosts';

export default class Home extends Component {
	render() {
		return (
			<div className='home'>
				<Logo/>
				<Search/>
				<RecentPosts/>
			</div>
		);
	}
}
