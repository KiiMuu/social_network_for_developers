import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './Navbar.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <Fragment>
            <ul className="uk-navbar-nav uk-visible@s">
                <li>
                    <NavLink to="/profiles">Developers</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink onClick={logout} to="#!">Logout</NavLink>
                </li>
            </ul>
            {/* Show Nav items in sidebar in phone screens */}
            <div className="sidebar uk-hidden@s">
                <span className="uk-button sidebar-btn" type="button" data-uk-toggle="target: #offcanvas-overlay">Open</span>
                <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
                    <div className="uk-offcanvas-bar">
                        <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                        <Link className="logo" to="/"><i className="fa fa-connectdevelop"></i> Dev</Link>
                        <ul className="uk-nav uk-nav-default">
                            <li>
                                <NavLink to="/profiles">Developers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/posts">Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={logout} to="#!">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    const gusetLinks = (
        <Fragment>
            <ul className="uk-navbar-nav uk-visible@s">
                <li>
                    <NavLink to="/profiles">Developers</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign up</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Sign in</NavLink>
                </li>
            </ul>
            {/* Show Nav items in sidebar in phone screens */}
            <div className="sidebar uk-hidden@s">
                <span className="uk-button sidebar-btn" type="button" data-uk-toggle="target: #offcanvas-overlay">Open</span>
                <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
                    <div className="uk-offcanvas-bar">
                        <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                        <Link className="logo" to="/"><i className="fa fa-connectdevelop"></i> Dev</Link>
                        <ul className="uk-nav uk-nav-default">
                            <li>
                                <NavLink to="/profiles">Developers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup">Sign up</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signin">Sign in</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    return (
        <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <div className="navbar" style={(window.location.pathname === '/' || window.location.pathname === '/signup' || window.location.pathname === '/signin') ? {background: 'transparent'} : {background: '#35A7FF'}}>
                <div className="navbar-content">
                    <nav className="uk-navbar-container uk-navbar-transparent uk-container" data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <Link to="/"><i className="fa fa-connectdevelop"></i> Dev</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            { !loading && (<Fragment>{ isAuthenticated ? authLinks : gusetLinks }</Fragment>) }
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
