import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Alert.scss';

const SuccessAlert = ({ alerts }) => 
    alerts !== null && 
    alerts.length > 0 
    && alerts.map(alert => (
    <div className="uk-container success-alert">
        <div key={alert.id} className="alert uk-animation-slide-top-small uk-alert-success" data-uk-alert>
            <p><i class="fa fa-check"></i> {alert.msg}</p>
        </div>
    </div>
));

SuccessAlert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(SuccessAlert);
