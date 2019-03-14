import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import Search from './search';
import ResultPosts from './resultPosts';

class Results extends Component {

    handleSearchSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }

    render() {
        return(
            <div className='results'>
                <Logo size="small"/>
                <Search type='search-small' onSubmit={(query) => this.handleSearchSubmit(query)}/>
                <ResultPosts/>
            </div>
        )
    }
}

export default connect(null, actions)(Results);