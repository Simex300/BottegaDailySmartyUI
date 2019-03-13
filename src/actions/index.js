import {
    FETCH_POSTS,
    FETCH_RESULTS_POSTS
} from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        // Request goes here
        axios.get('https://api.dailysmarty.com/posts')
            .then(response => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: response.data.posts
                })
                console.log(response.data);
            });
    }
}

export function fetchPostsWithQuery(query, callback) {
    return function(dispatch) {
        // Request goes here
        axios.get(`https://api.dailysmarty.com/search?q=${query}`)
            .then(response => {
                dispatch({
                    type: FETCH_RESULTS_POSTS,
                    payload: response.data.posts
                })
                if(callback)
                    callback();
            });
    }
}