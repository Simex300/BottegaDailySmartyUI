import React, { Component } from 'react';

class Post extends Component {

    renderTopics(topics) {
        topics = topics.map((topic, index) => {
            return <span key={index} className='post__topics-item'>{topic} </span>
        })
        return topics;
    }

    renderLinks(links) {
        links = links.map((link, index) => {
            return (
                <div className='post-link' key={index}>
                    <div className='post-link__box'></div>
                    <div className='post-link__link'>
                        <a href={link.link_url}>Useful Link #{index + 1}</a>
                    </div>
                </div>
            )
        })
        return links;
    }


    render() {
        const {title, associated_topics, post_links, type} = this.props;
        if(type == "recent"){
            return(
                <div className='post'>
                    <div className='post__title'>
                        {title}
                    </div>
                    <div className='post__topics'>
                        {this.renderTopics(associated_topics)}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='result-post'>
                    <div className='result-post__topics'>
                        {this.renderTopics(associated_topics)}
                    </div>
                    <div className='result-post__title'>
                        {title}
                    </div>
                    <div className='result-post__links'>
                        {this.renderLinks(post_links)}
                    </div>
                </div>
            )
        }
    }
}

export default Post;