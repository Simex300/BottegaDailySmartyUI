import {
    FETCH_POSTS,
    FETCH_RESULTS_POSTS
} from '../actions/types';

const INITIAL_STATE = {
    resultPosts: [],
    recentPosts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            const recentPosts  = action.payload;
            return {
                ...state,
                recentPosts
            }

        case FETCH_RESULTS_POSTS:
            const resultPosts = action.payload;
            return {
                ...state, 
                resultPosts
            }
    
        default:
            return state;
    }
}