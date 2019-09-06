import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
    <Fragment>
        <img
            src={spinner}
            style={{ width: '400px', margin: 'auto', display: 'block' }}
            alt='Loading...'
            draggable="false"
        />
    </Fragment>
);