import axios from "axios";

const API = axios.create({baseURL: `http://localhost:3002`});
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost);
export const deletePost = (id) => API.delete(` $/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const signin = (formData) => API.post(`/user/signin`, formData);
export const signup = (formData) => API.post(`/user/signup`, formData)

