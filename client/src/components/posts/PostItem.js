import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import './Posts.scss';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({ 
    addLike,
    removeLike,
    deletePost,
    auth, 
    post: { _id, text, name, avatar, user, likes, comments, date },
    showActions
}) => {
    return (
        <div className="post-item uk-padding">
            <article className="uk-comment">
                <header className="uk-comment-header uk-grid-medium uk-flex-middle" data-uk-grid>
                    <div className="uk-width-auto">
                        <Link to={`/profile/${user}`}>
                            <img className="uk-comment-avatar uk-border-circle" src={avatar} width="100" height="100" alt={name} draggable="false" />
                        </Link>
                    </div>
                    <div className="uk-width-expand">
                        <div className="uk-align-right">
                            {showActions && <Fragment>
                                <i className="fa fa-chevron-down"></i>
                                <div className="dropdown" data-uk-dropdown="mode: click; animation: uk-animation-scale-up">
                                    <ul className="uk-nav uk-dropdown-nav">
                                        <li>
                                            <Link to={`/posts/${_id}`}>
                                                Discussion{' '} 
                                                {comments.length > 0 && (
                                                    <span>{comments.length}</span>
                                                )}
                                            </Link>
                                        </li>
                                        {!auth.loading && user === auth.user._id && (
                                            <li>
                                                <button
                                                    onClick={e => deletePost(_id)}
                                                    type="button"
                                                >
                                                    Delete
                                                </button>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </Fragment>}
                        </div>
                        <h4 className="uk-comment-title uk-margin-remove"><span className="uk-link-reset">{name}</span></h4>
                        <ul className="uk-comment-meta uk-subnav uk-margin-remove-top">
                            <li><Moment format="YYYY/MM/DD">{date}</Moment></li>
                        </ul>
                    </div>
                </header>
                <div className="uk-comment-body">
                    <p className="post-content">{text}</p>
                    <div className="likes">
                        {showActions && <Fragment>
                            <button 
                                onClick={e => addLike(_id)}
                                type="button"
                                className="uk-margin-small-right"
                            >
                                <i className="fa fa-thumbs-up"></i>
                                <span>{' '}
                                    {likes.length > 0 && (
                                        <span>{likes.length}</span>
                                    )}
                                </span>
                            </button>
                            <button
                                onClick={e => removeLike(_id)}
                                type="button"
                            >
                                <i className="fa fa-thumbs-down"></i>
                            </button>
                        </Fragment>}
                    </div>
                </div>
            </article>
        </div>
    )
}

PostItem.defaultProps = {
    showActions: true
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem);
