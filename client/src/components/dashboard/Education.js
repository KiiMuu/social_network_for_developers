import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {

    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                    edu.to === null ? (' Now') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                }
            </td>
            <td>
                <button onClick={() => deleteEducation(edu._id)} className="uk-button uk-button-danger uk-button-small" type="button">Remove</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <div className="education-credentials">
                <h4 className="uk-text-uppercase">Education credentials</h4>
                <div className="uk-overflow-auto">
                    <table className="uk-table uk-table-middle uk-table-divider">
                        <thead>
                            <tr>
                                <th className="uk-width-medium">School</th>
                                <th className="uk-width-medium">Degree</th>
                                <th className="uk-width-medium">Years</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educations}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);
