import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function Posts(props) {
    return (
        <div className="posts">
            {props.posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
}

Posts.propTypes = {
    posts: PropTypes.array
};

const PostContainer = connect(state => {
    return {
        posts: state.posts
    };
})(Posts);

export default PostContainer;
