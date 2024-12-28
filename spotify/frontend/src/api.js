import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Authentication APIs
export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);

// Deezer Search API using RapidAPI
export const searchDeezer = (query) =>
  API.get('/deezer/search', {
    params: { query },
  });
