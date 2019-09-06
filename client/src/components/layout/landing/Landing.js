import React from 'react';
import './Landing.scss';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {

    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className="landing uk-position-top">
            <div className="uk-panel uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
                <div className="landing-content uk-text-center" data-uk-scrollspy="target: > h1, p; cls:uk-animation-slide-top; delay: 700">
                    <h1 className="uk-text-uppercase">Developers connector</h1>
                    <p className="uk-text-muted">Create a developer profile/portfolio, share posts and get help from other developers</p>
                    <div className="auth-btns" data-uk-scrollspy="target: > a, a; cls:uk-animation-slide-bottom; delay: 700">
                        <Link to="/signup" className="signup uk-button uk-margin-small-right">Sign up</Link>
                        <Link to="/signin" className="signin uk-button uk-margin-small-right">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Landing.protoTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
