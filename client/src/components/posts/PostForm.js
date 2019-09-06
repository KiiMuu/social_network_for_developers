import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Posts.scss';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {

    const [text, setText] = useState('');

    return (
        <div className="post-form">
            <form onSubmit={e => {
                e.preventDefault();
                addPost({ text });
                setText('');
            }}>
                <textarea
                    className="uk-textarea"
                    name="text"
                    placeholder="Say something..."
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

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm);
