import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.example.com/', // Replace with your backend's base URL
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
