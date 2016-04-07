import axios from 'axios';

const URL_ROOT = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=iurii-12345';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

export const fetchPosts = () => {
    const request = axios.get(`${URL_ROOT}/posts/${API_KEY}`);

    return ({
        type: FETCH_POSTS,
        payload: request
    });
};

export const createPost = (props) => {
    const request = axios.post(`${URL_ROOT}/posts/${API_KEY}`, props);

    return ({
        type: CREATE_POST,
        payload: request
    });
};
