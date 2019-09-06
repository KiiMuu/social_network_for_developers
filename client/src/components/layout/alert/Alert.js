import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Alert.scss';

const Alert = ({ alerts }) => 
    alerts !== null && 
    alerts.length > 0 
    && alerts.map(alert => (
    <div className="uk-container uk-container-small">
        <div className="danger-alert uk-animation-slide-top-small">
            <p key={alert.id}><i className="fa fa-exclamation-triangle"></i> {alert.msg}</p>
        </div>
    </div>
));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
