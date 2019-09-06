import React from 'react';
import notfound from './not_found.png';

const NotFound = () => {
    return (
        <div className="not-found uk-container uk-margin-large-top uk-text-center">
            <img src={notfound} alt="Page not found" height="700" width="700" draggable="false" />
        </div>
    )
}

export default NotFound;
