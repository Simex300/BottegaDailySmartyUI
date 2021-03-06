import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';
import Post from './post';


class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }
    
    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if (index < 3){
                return (
                    <Post type="recent" key={index} {...post} />
                )
            }
        })
        return posts;
    }

    render() {
        return(
            <div className='recent-posts'>
                <div className='recent-posts__wrapper'>
                    <div className='recent-posts__heading'>Recent Posts</div>
                    <div className='recent-posts__posts'>
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { recentPosts } = state.post;
    return {
        recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);