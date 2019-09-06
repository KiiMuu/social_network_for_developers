import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
} }) => {
    return (
        <div className="profile-item uk-box-shadow-medium uk-text-center">
            <div>
                <img src={avatar} className="uk-border-circle" width="100" height="100" alt={name} draggable="false" />
            </div>
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <span className="status">{status} {company && <span> at {company}</span>}</span>
            </div>
            <div className="uk-child-width-1-3@s item-content" data-uk-grid>
                <div>
                    <i className="fa fa-map-marker"></i> {location && <span className="location">{location}</span>}
                </div>
                <div>
                    <ul className="uk-list">
                        {skills.slice(0, 4).map((skill, index) => (
                            <li key={index} className="skill">{skill}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span>
                        <Link to={`/profile/${_id}`} className="uk-button uk-button-text">View Profile</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem;
