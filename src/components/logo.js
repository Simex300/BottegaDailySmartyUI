import React from 'react';

import { Link } from 'react-router-dom';

export default function Logo({size}) {
    return (
        <div className='logo'>
            <Link to="/">
                <img className={size ? size : ""} src="/assets/ds_circle_logo.png"/>
            </Link>
        </div>
    )
}