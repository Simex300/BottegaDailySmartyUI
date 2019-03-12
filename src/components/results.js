import React, { Component } from 'react';

import Logo from './logo';
import Search from './search';

class Results extends Component {
    render() {
        return(
            <div className='results'>
                <Logo size="small"/>
                <Search/>
            </div>
        )
    }
}

export default Results;