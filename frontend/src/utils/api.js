
const API_BASE_URL = import.meta.env.PROD
	? "https://vynq-chat-backend.onrender.com"
	: "";

const apiFetch = (url, options = {}) => {
	const headers = { ...options.headers };

	try {
		const storedUser = JSON.parse(localStorage.getItem("chat-user"));
		if (storedUser?.token) {
			headers.Authorization = `Bearer ${storedUser.token}`;
		}
	} catch {
		// ignore malformed localStorage
	}

	return fetch(`${API_BASE_URL}${url}`, {
		...options,
		headers,
		credentials: "include",
	});
};

export default apiFetch;
