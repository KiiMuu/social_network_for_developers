import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Auth.scss';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types'
import Alert from '../layout/alert/Alert';

const SignIn = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    }

    // redirect user to home if logged in
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className="signin uk-position-top">
            <div className="uk-panel uk-container uk-container-small uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
                <div className="signin-content uk-text-center">
                    <h1 className="uk-text-uppercase">Sign in</h1>
                    <p>Sign in with your existing account.</p>
                    <div className="form-content">
                        <form className="uk-grid-small" data-uk-grid onSubmit={e => handleSubmit(e)} data-uk-scrollspy="target: > div; cls:uk-animation-slide-top; delay: 300">
                            <div className="uk-width-1-2@s">
                                <input 
                                    className="uk-input" 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => handleChange(e)}
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
                            <div className="uk-width-1-1">
                                <Alert />
                            </div>
                            <div className="uk-width-1-2@s uk-text-left">
                                <button type="submit" className="uk-button uk-button-default">Sign in</button>
                            </div>
                            <div className="uk-width-1-2@s uk-text-right signup-option">
                                <p>haven't an account? <Link to="/signup" className="uk-text-uppercase">Sign up</Link></p>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    )
}

SignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(SignIn);