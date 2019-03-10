import React, { Component } from 'react';

class Results extends Component {
    render() {
        return(
            <div className='results'>
                <div className='results__wrapper'>
                    <div className='results__heading'>Recent Posts</div>
                    <ul className='results__content'>
                        <li>recent post 0</li>
                        <li>recent post 1</li>
                        <li>recent post 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Results;