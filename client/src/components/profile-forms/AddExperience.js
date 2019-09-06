import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ProfileForms.scss';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import Alert from '../layout/alert/Alert';

const AddExperience = ({ addExperience, history, setAlert }) => {

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description
    } = formData;

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
    }

    return (
        <Fragment>
            <div className="add-experience">
                <div className="uk-container uk-container-small">
                    <h1 className="uk-text-uppercase uk-text-center">Add experience</h1>
                    <p className="uk-text-muted uk-text-center">Add any developer/programming positions that you have had in the past.</p>
                    <form className="profile-inputs" onSubmit={e => handleSubmit(e)}>
                        <div className="uk-margin">
                            <input 
                                className="uk-input" 
                                type="text" 
                                placeholder="Job title" 
                                name="title"
                                value={title}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="uk-margin">
                            <input 
                                className="uk-input" 
                                type="text" 
                                placeholder="Company" 
                                name="company"
                                value={company}
                                onChange={e => handleChange(e)}
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
                            />
                        </div>
                        <div className="uk-margin">
                            <h4>From Date</h4>
                            <input
                                className="uk-input"  
                                type="date" 
                                name="from"
                                value={from}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="uk-margin">
                            <label>
                                <input 
                                    class="uk-checkbox" 
                                    type="checkbox"
                                    name="current"
                                    checked={current}
                                    value={current}
                                    onChange={e => 
                                        {setFormData({ ...formData, current: !current });
                                        toggleDisabled(!toDateDisabled);
                                    }}          
                                /> 
                                    {' '} Current Job
                            </label>
                        </div>
                        <div className="uk-margin">
                            <h4>To Date</h4>
                            <input
                                className="uk-input"  
                                type="date" 
                                name="to"
                                value={to}
                                onChange={e => handleChange(e)}
                                disabled={toDateDisabled ? 'disabled' : ''}
                            />
                        </div>
                        <div className="uk-margin">
                            <textarea 
                                className="uk-textarea" 
                                rows="5" 
                                placeholder="Job description" 
                                name="description"
                                value={description}
                                onChange={e => handleChange(e)}
                                >   
                            </textarea>
                        </div>
                        <div className="uk-margin">
                            <Alert />
                        </div>
                        <div className="uk-margin">
                            <button className="uk-button uk-button-primary uk-margin-small-right">Add</button>
                            <Link to='/dashboard' className="uk-button uk-button-default">Go back <i className="fa fa-undo"></i></Link>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { addExperience, setAlert })(withRouter(AddExperience));
