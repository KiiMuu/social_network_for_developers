import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Auth.scss';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'
import Alert from '../layout/alert/Alert';

const SignUp = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = formData;

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setAlert('Passwords do not match.', 'danger');
        } else {
            register({ name, email, password });
        }
    }

    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className="signup uk-position-top">
            <div className="uk-panel uk-container uk-container-small uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
                <div className="signup-content uk-text-center">
                    <h1 className="uk-text-uppercase">Sign up</h1>
                    <p>Create your own account.</p>
                    <div className="form-content">
                        <form className="uk-grid-small" data-uk-grid onSubmit={e => handleSubmit(e)} data-uk-scrollspy="target: > div; cls:uk-animation-slide-top; delay: 300">
                            <div className="uk-width-1-2@s">
                                <input 
                                    className="uk-input" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="uk-width-1-2@s">
                                <input 
                                    className="uk-input" 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => handleChange(e)}
                                    uk-tooltip="title: This site uses Gravatar so if you want a profile image, use a Gravatar email"
                                />
                            </div>
                            <div className="uk-width-1-2@s">
                                <input 
                                    className="uk-input" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="uk-width-1-2@s">
                                <input 
                                    className="uk-input" 
                                    type="password" 
                                    name="confirmPassword" 
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="uk-width-1-1">
                                <Alert />
                            </div>
                            <div className="uk-width-1-2@s uk-text-left">
                                <button type="submit" className="uk-button uk-button-default">Sign up</button>
                            </div>
                            <div className="uk-width-1-2@s uk-text-right signin-option">
                                <p>have an account? <Link to="/signin" className="uk-text-uppercase">Sign in</Link></p>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    )
}

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);
