import React, { Component } from 'react';
import Logo from './logo';
import Search from './search';
import Results from './results';

class Container extends Component {
    render() {
        return(
            <div className='container'>
                <Logo/>
                <Search/>
                <Results/>
            </div>
        )
    }
}

export default Container;