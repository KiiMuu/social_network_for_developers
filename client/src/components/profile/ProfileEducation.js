import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import Moment from 'react-moment';

const ProfileEducation = ({ education: {
    school, degree, fieldofstudy, current, to, from, description
} }) => {
    return (
        <div className="profile-edu">
            <h4>{school}</h4>
            <p>
                <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
            <p>
                Degree: {degree}
            </p>
            <p>
                Field of study: {fieldofstudy}
            </p>
            <p>
                Description: {description}
            </p>
        </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired
}

export default ProfileEducation;
