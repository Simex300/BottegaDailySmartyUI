import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from './post';

class ResultPosts extends Component {

    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post}/>
        })

        return posts;
    }

    render() {
        return(
            <div className='result-posts'>
                <div className='result-posts__wrapper'>
                    <div className='result-posts__posts'>
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.post.resultPosts
    };
}

export default connect(mapStateToProps)(ResultPosts);