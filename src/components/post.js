import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {title, content} = this.props;
        return(
            <div className='post'>
                <h2>{title}</h2>
            </div>
        )
    }
}

export default Post;