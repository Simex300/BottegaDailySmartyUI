import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import Search from './search';
import RecentPosts from './recentPosts';

class Home extends Component {
	
    handleSearchSubmit = function(query) {
        this.props.fetchPostsWithQuery(query, () => {
			this.props.history.push('/results');
		});
    }


	render() {
		return (
			<div className='home'>
				<Logo/>
				<Search onSubmit={query => this.handleSearchSubmit(query)}/>
				<RecentPosts/>
			</div>
		);
	}
}

export default connect(null, actions)(Home);