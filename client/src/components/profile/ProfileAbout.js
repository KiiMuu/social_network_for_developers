import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import bioImg from '../../img/bio.png';

const ProfileAbout = ({ profile: {
    bio,
    skills,
    user: { name }
} }) => {
    return (
        <div className="profile-about">
            {bio && (
                <Fragment>
                    <div className="profile-bio uk-margin-small-top uk-padding uk-text-center">
                        <img src={bioImg} width="45" height="45" alt={name} draggable="false" />
                        <p className="uk-text-muted">{bio}</p>
                    </div>
                </Fragment>
            )}
            <div className="profile-skills uk-margin-small-top uk-padding uk-text-center">
                <h3>{name.trim().split(' ')[0]}'s skills</h3>
                <div class="uk-flex uk-flex-center uk-flex-around">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <i className="fa fa-check"></i> {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;
