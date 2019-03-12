import React from 'react';

export default function Logo({size}) {
    return (
        <div className='logo'>
            <img className={size ? size : ""} src="/assets/ds_circle_logo.png"/>
        </div>
    )
}