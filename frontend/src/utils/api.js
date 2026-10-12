
const API_BASE_URL = import.meta.env.PROD
	? "https://vynq-chat-backend.onrender.com"
	: "";

const apiFetch = (url, options = {}) => {
	return fetch(`${API_BASE_URL}${url}`, {
		...options,
		credentials: "include",
	});
};

export default apiFetch;
