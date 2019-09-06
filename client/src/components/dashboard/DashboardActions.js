import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="/edit-profile" className="uk-button uk-button-default uk-margin-small-right"><i className="fa fa-pencil-square-o"></i> Edit Profile</Link>
            <Link to="/add-experience" className="uk-button uk-button-default uk-margin-small-right"><i className="fa fa-plus-circle"></i> Add experience</Link>
            <Link to="/add-education" className="uk-button uk-button-default"><i className="fa fa-graduation-cap"></i> Add education</Link>
        </div>
    )
}

export default DashboardActions;
