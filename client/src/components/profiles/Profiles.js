import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import ProfileItem from './ProfileItem';
import './Profiles.scss';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {

    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <Fragment>
            { loading ? <Spinner /> : <Fragment>
                <div className="profiles">
                    <div className="uk-container uk-container-small">
                        <h1 className="uk-text-uppercase uk-text-center">Developers</h1>
                        <p className="uk-text-muted uk-text-center"><i className="fa fa-connectdevelop"></i> Browse and connect with developers</p>
                        <div className="profiles-content">
                            {profiles.length > 0 ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No profiles found</h4>}
                        </div>
                    </div>
                </div>
            </Fragment> }
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
