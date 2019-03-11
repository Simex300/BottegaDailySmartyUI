import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {title, associated_topics} = this.props;
        return(
            <div className='post'>
                <div className='post__title'>
                    {title}
                </div>
                <div className='post__topics'>
                    {associated_topics.map((topic, index) => {
                        return <span key={index} className='post__topics-item'>{topic} </span>
                    })}
                </div>
            </div>
        )
    }
}

export default Post;