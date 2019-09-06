import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Dashboard.scss';
import dashImg from '../../img/dashboard.png';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/spinner/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import SuccessAlert from '../layout/alert/SuccessAlert';
import { setAlert } from '../../actions/alert';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }, setAlert, deleteAccount }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <div className="dashboard">
            <div className="uk-container">
                <div className="uk-width-1-1">
                    <SuccessAlert />
                </div>
                <div className="uk-child-width-1-2@m uk-grid-small" data-uk-grid>
                    <div className="dash-img">
                        <img src={dashImg} draggable="false" alt="Dashboard" />
                    </div>
                    <div className="dash-info">
                        <h1 className="uk-text-uppercase">Dashboard</h1>
                        <p>Welcome {user && user.name}, it's your dashboard place. here you can update, customize or just delete your information.</p>
                    </div>
                </div>
                {profile !== null ? (
                    <Fragment>
                        <DashboardActions />
                        <Experience experience={profile.experience} />
                        <Education education={profile.education} />
                        <div data-uk-margin>
                             <button onClick={() => deleteAccount()} className="uk-button uk-button-danger" type="button">Delete Account</button>
                        </div>
                    </Fragment>
                ) : (
                    <Fragment>
                        <div className="have-not-profile">
                            <p>You have not yet setup a profile, please add some info.</p>
                        </div>
                        <Link to='/create-profile' className="uk-button uk-button-primary">Create profile</Link>
                    </Fragment>
                )}
            </div>
        </div>
    </Fragment>;
}

Dashboard.protoTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    setAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount, setAlert })(Dashboard);
