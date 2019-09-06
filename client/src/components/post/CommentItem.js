import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
    deleteComment,
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth
}) => {
    return (
        <article className="uk-comment uk-padding comment-item">
            <header className="uk-comment-header uk-grid-medium uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                    <Link to={`/profile/${user}`}>
                        <img className="uk-comment-avatar uk-border-circle" src={avatar} width="50" height="50" alt={name} />
                    </Link>
                </div>
                <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove"><span className="uk-link-reset">{name}</span></h4>
                    <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li><Moment format="YYYY/MM/DD">{date}</Moment></li>
                        {!auth.loading && user === auth.user._id && (
                            <li>
                                <button
                                    onClick={e => deleteComment(postId, _id)}
                                    type="button"
                                    className="uk-button"
                                >Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
            </header>
            <div className="uk-comment-body">
                <p className="comment-content">{text}</p>
            </div>
        </article>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
