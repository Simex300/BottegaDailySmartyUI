import {
    FETCH_POSTS
} from '../actions/types';

const INITIAL_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log("Goes here!");
            const recentPosts  = action.payload;
            return {
                ...state,
                recentPosts
            }
    
        default:
            return state;
    }
}