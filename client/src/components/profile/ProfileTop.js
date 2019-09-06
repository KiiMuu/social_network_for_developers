import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';

const ProfileTop = ({ profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
} }) => {
    return (
        <div className="profile-info uk-text-center uk-padding">
            <div>
                <img src={avatar} className="uk-border-circle" width="200" height="200" alt={name} draggable="false" />
            </div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <span className="status">{status} {company && <span> at {company}</span>}</span>
            </div>
            <div>
                <span className="location"><i className="fa fa-map-marker"></i> {location && <span>{location}</span>}</span>
            </div>
            <div className="social-links">
                {
                    website && (
                        <a href={website} target="_blank" rel="noopener noreferrer"><i className="fa fa-globe"></i></a>
                    )
                }
                {social && social.twitter && (
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                )}
                {social && social.facebook && (
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                )}
                {social && social.linkedin && (
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                )}
                {social && social.youtube && (
                    <a href={social.youtube} target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
                )}
                {social && social.instagram && (
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                )}
            </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop;
