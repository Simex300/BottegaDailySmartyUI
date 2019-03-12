import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import Search from './search';

class Results extends Component {

    handleSearchSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }

    render() {
        return(
            <div className='results'>
                <Logo size="small"/>
                <Search onSubmit={(query) => this.handleSearchSubmit(query)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Results);