import {
    CREATE,
    DELETE,
    FETCH_ALL,
    LIKE,
    UPDATE,
    FETCH_POST,
    END_LOADING,
    START_LOADING, FETCH_BY_SEARCH
} from "../constants/actionTypes";
import * as api from "../api";
//!getPost
export const getPost = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchPost(id);
        dispatch({type: FETCH_POST, payload: {post: data}});
    } catch (error) {
        console.log(error);
    }
};
//!getPosts
export const getPosts = (page) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchPosts(page);
        console.log(data);
        dispatch({type: FETCH_ALL, payload: data});
        dispatch({type:END_LOADING});
    } catch (err) {
        console.log(err);
    }
};
//!getPostsBySearch
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type:START_LOADING});
        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
       dispatch({type:FETCH_BY_SEARCH,payload:{data}});
    } catch (err) {
        console.log(err);
    }
};
//!createPost
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    } catch (err) {
        console.log(err);
    }
};
//!updatePost
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    } catch (err) {
        console.log(err);
    }
};
//!deletePost
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
};
//!likePost
export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    try {
        const {data} = await api.likePost(id, user?.token);
        dispatch({type: LIKE, payload: data});
    } catch (err) {
        console.log(err);
    }
};
