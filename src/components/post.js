import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            height: 0
        }
    }

    renderTopics(topics) {
        topics = topics.map((topic, index) => {
            return <span key={index} className='post__topics-item'>{topic} </span>
        })
        return topics;
    }

    renderLinks(links) {
        links = links.map((link, index) => {
            var textUrl = link.link_url.slice(0, -2);
            textUrl = textUrl.slice(textUrl.lastIndexOf('/') + 1);
            textUrl = textUrl.split('-').map(string => {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }).join(' ');

            return (
                <div className='post-link' key={index}>
                    <div className='post-link__box'></div>
                    <div className='post-link__link'>
                        <a href={link.link_url}>{textUrl}</a>
                    </div>
                </div>
            )
        })

        if(links.length == 0) {
            return <div className='post-link__alert'>No post links</div>
        }
        return links;
    }


    toggleHover(inside) {
        if(inside){
            this.setState({ height: 70 });
        }
        else{
            this.setState({ height: 0 });
        }
    }

    render() {
        const {title, associated_topics, post_links, url_to_post, type} = this.props;
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
                <div className='result-post' onMouseEnter={() => {this.toggleHover(true)}} onMouseLeave={() => {this.toggleHover(false)}}>
                    <div className='result-post__topics'>
                        {this.renderTopics(associated_topics)}
                    </div>
                    <div className='result-post__title'>
                        <a href={url_to_post}>{title}</a>
                    </div>
                    <AnimateHeight duration={500} height={this.state.height}>
                        <div className='result-post__links'>
                            {this.renderLinks(post_links)}
                        </div>
                    </AnimateHeight>
                </div>
            )
        }
    }
}

export default Post;