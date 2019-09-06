import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {

    const [text, setText] = useState('');

    return (
        <div className="comment-form">
            <form onSubmit={e => {
                e.preventDefault();
                addComment(postId, { text });
                setText('');
            }}>
                <textarea
                    className="uk-textarea"
                    name="text"
                    placeholder="Leave a comment"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                >

                </textarea>
                <input type="submit" className="uk-button" value="Send" />
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CommentForm);
