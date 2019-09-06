import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile, loading }, auth, match }) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <Fragment>
            {profile === null || loading ? <Spinner /> : <Fragment>
                <div className="profile">
                    <div className="uk-container">
                        <Link to="/profiles" className="uk-button uk-button-default uk-button-small uk-margin-small-right">Back to profiles <i className="fa fa-undo"></i></Link>
                        {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to="/edit-profile" className="uk-button uk-button-default uk-button-small">Edit Profile <i className="fa fa-pencil-square-o"></i></Link>)}
                        <div className="uk-margin-medium-top profile-content">
                            <ProfileTop profile={profile} />
                            <ProfileAbout profile={profile} />
                            <div className="uk-margin-small-top">
                                <div className="uk-section uk-padding experience">
                                    <div className="uk-container">
                                        <h3 className="uk-text-uppercase">Experience</h3>
                                        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                                            {profile.experience.length > 0 ? (<Fragment>
                                                {profile.experience.map(experience => (
                                                    <ProfileExperience key={experience._id} experience={experience} />
                                                ))}
                                            </Fragment>) : (<h4 style={{color: '#a5a5a5'}}>No experience credentials</h4>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-margin-small-top">
                                <div className="uk-section uk-padding education">
                                    <div className="uk-container">
                                        <h3 className="uk-text-uppercase">Education</h3>
                                        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                                            {profile.education.length > 0 ? (<Fragment>
                                                {profile.education.map(education => (
                                                    <ProfileEducation key={education._id} education={education} />
                                                ))}
                                            </Fragment>) : (<h4 style={{color: '#a5a5a5'}}>No education credentials</h4>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {profile.githubusername && (
                                <ProfileGithub username={profile.githubusername} />
                            )}
                        </div>
                    </div>
                </div>
            </Fragment>}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
