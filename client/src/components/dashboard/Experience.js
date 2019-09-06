import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {

    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                    exp.to === null ? (' Now') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                }
            </td>
            <td>
                <button onClick={() => deleteExperience(exp._id)} className="uk-button uk-button-danger uk-button-small" type="button">Remove</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <div className="experience-credentials">
                <h4 className="uk-text-uppercase">Experience credentials</h4>
                <div className="uk-overflow-auto">
                    <table className="uk-table uk-table-middle uk-table-divider">
                        <thead>
                            <tr>
                                <th className="uk-width-medium">Company</th>
                                <th className="uk-width-medium">Title</th>
                                <th className="uk-width-medium">Years</th>
                            </tr>
                        </thead>
                        <tbody>
                            {experiences}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience })(Experience);
