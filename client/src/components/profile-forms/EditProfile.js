import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ProfileForms.scss';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import Alert from '../layout/alert/Alert';

const EditProfile = ({ 
    profile: {profile, loading}, 
    createProfile, 
    getCurrentProfile, 
    history, setAlert 
}) => {

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills.join(', '),
            githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram
        });
    }, [loading, getCurrentProfile]);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    }

    return (
        <div className="edit-profile">
            <div className="uk-container uk-container-small">
                <h1 className="uk-text-uppercase uk-text-center">Update your profile</h1>
                <p className="uk-text-muted uk-text-center">Let's get some information to make your profile stand out.</p>
                <form className="profile-inputs" onSubmit={e => handleSubmit(e)}>
                    <div className="uk-margin">
                        <select 
                            className="uk-select" 
                            name="status" 
                            value={status} 
                            onChange={e => handleChange(e)} 
                            uk-tooltip="title: Give us an idea of where you are at in your career">
                            <option value="0">Select Professional Status</option>
                            <option value="Developer">Developer</option>
                            <option value="Junior Developer">Junior Developer</option>
                            <option value="Senior Developer">Senior Developer</option>
                            <option value="Manager">Manager</option>
                            <option value="Student or Learning">Student or Learning</option>
                            <option value="Instructor">Instructor or Teacher</option>
                            <option value="Intern">Intern</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="uk-margin">
                        <input 
                            className="uk-input" 
                            type="text" 
                            placeholder="Company" 
                            name="company"
                            value={company}
                            onChange={e => handleChange(e)}
                            uk-tooltip="title: Could be your own company or one you work for"
                        />
                    </div>
                    <div className="uk-margin">
                        <input 
                            className="uk-input" 
                            type="text" 
                            placeholder="Website" 
                            name="website"
                            value={website}
                            onChange={e => handleChange(e)}
                            uk-tooltip="title: Could be your own or a company website"
                        />
                    </div>
                    <div className="uk-margin">
                        <input 
                            className="uk-input" 
                            type="text" 
                            placeholder="Location" 
                            name="location"
                            value={location}
                            onChange={e => handleChange(e)}
                            uk-tooltip="title: City &amp; state suggested (eg. Boston, MA)"
                        />
                    </div>
                    <div className="uk-margin">
                        <input 
                            className="uk-input" 
                            type="text" 
                            placeholder="Skills" 
                            name="skills"
                            value={skills}
                            onChange={e => handleChange(e)}
                            uk-tooltip="title: Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                        />
                    </div>
                    <div className="uk-margin">
                        <input 
                            className="uk-input" 
                            type="text"
                            placeholder="Github Username"
                            name="githubusername"
                            value={githubusername}
                            onChange={e => handleChange(e)}
                            uk-tooltip="title: If you want your latest repos and a Github link, include your username"
                        />
                    </div>
                    <div className="uk-margin">
                        <textarea 
                            className="uk-textarea" 
                            rows="5" 
                            placeholder="A short bio of yourself" 
                            name="bio"
                            value={bio}
                            onChange={e => handleChange(e)}
                            uk-tooltip="title: Tell us a little about yourself"
                            >   
                        </textarea>
                    </div>
                    <div className="uk-margin">
                        <button onClick={() => toggleSocialInputs(!displaySocialInputs)}
                            type="button" 
                            className="uk-button uk-button-default uk-margin-small-right"
                        >
                            Add social network links
                        </button>
                        <span>(optional)</span>
                    </div>

                    {displaySocialInputs && <Fragment>
                        <div className="uk-margin">
                            <i className="fa fa-facebook uk-form-icon"></i>
                            <input
                                className="uk-input"
                                type="text"
                                placeholder="Facebook URL"
                                name="facebook"
                                value={facebook}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="uk-margin">
                            <i className="fa fa-twitter uk-form-icon"></i>
                            <input
                                className="uk-input"
                                type="text"
                                placeholder="Twitter URL"
                                name="twitter"
                                value={twitter}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="uk-margin">
                            <i className="fa fa-youtube uk-form-icon"></i>
                            <input 
                                className="uk-input"
                                type="text"
                                placeholder="Youtube URL"
                                name="youtube"
                                value={youtube}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="uk-margin">
                            <i className="fa fa-linkedin uk-form-icon"></i>
                            <input 
                                className="uk-input"
                                type="text"
                                placeholder="Linkedin URL"
                                name="linkedin"
                                value={linkedin}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="uk-margin">
                            <i className="fa fa-instagram uk-form-icon"></i>
                            <input 
                                className="uk-input"
                                type="text"
                                placeholder="Instagram URL"
                                name="instagram"
                                value={instagram}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                    </Fragment>}
                    <div className="uk-margin">
                        <Alert />
                    </div>
                    <div className="uk-margin">
                        <button className="uk-button uk-button-primary uk-margin-small-right">Update</button>
                        <Link to='/dashboard' className="uk-button uk-button-default">Go back <i className="fa fa-undo"></i></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    setAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, setAlert, getCurrentProfile })(withRouter(EditProfile));
