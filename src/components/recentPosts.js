import React, { Component } from 'react';

class RecentPosts extends Component {
    render() {
        return(
            <div className='recent-post'>
                <div className='recent-post__wrapper'>
                    <div className='recent-post__heading'>Recent Posts</div>
                    <ul className='recent-post__content'>
                        <li>recent post 0</li>
                        <li>recent post 1</li>
                        <li>recent post 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RecentPosts;