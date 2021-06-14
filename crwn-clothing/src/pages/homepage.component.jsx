import React from 'react';
import './homepage.style.scss';
import {Directory} from '../components/directory/directory.component';

export const Homepage = (params) => {
    return(
        <div className={'homepage'}>
            <Directory></Directory>
        </div>
    )
}