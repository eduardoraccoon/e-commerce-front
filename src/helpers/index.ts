import axios from 'axios';

const baseURL = process.env.REACT_APP_API;

export const api = axios.create({
    baseURL: baseURL
});