import * as types from '../constants/types';
import { createPost, fetchPosts, fetchPost } from '../shared/http';
import { loading, loaded } from './loading';

export function updatePosts(posts) {
    return {
        type: types.posts.UPDATE,
        error: false,
        posts
    };
}

export function createNewPost(payload) {
    return dispatch => {
        dispatch(loading());
        return createPost(payload).then(() => {
            dispatch(getPosts());
        });
    };
}

export function getPosts() {
    return (dispatch, getState) => {
        const state = getState();
        const { postIds } = state;
        const nPostsToFetch = postIds.length + 5;
        dispatch(loading());
        return fetchPosts(nPostsToFetch).then(posts => {
            dispatch(updatePosts(posts));
            dispatch(loaded());
        });
    };
}

export function getPost(id) {
    return dispatch => {
        dispatch(loading());
        return fetchPost(id).then(post => {
            dispatch(updatePosts(post));
            dispatch(loaded());
        });
    };
}
