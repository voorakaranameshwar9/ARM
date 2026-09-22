import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const uploadDataset = (formData) => API.post('/dataset/upload', formData);
export const runMining = (params) => API.post('/mining/run', params);
export const getDatasetSummary = () => API.get('/dataset/summary');
export const getComparisonData = () => API.get('/mining/comparison');
export const getAssociationRules = () => API.get('/mining/rules');

export default API;
