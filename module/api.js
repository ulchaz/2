const API_URL = "https://webdev-hw-api.vercel.app/api/todos";

export const fetchTasks = () => {
    return fetch(API_URL, { method: "GET" })
        .then((response) => response.json())
        .then((data) => data.todos);
};

export const createTask = (text) => {
    return fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
};

export const deleteTask = (id) => {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then((response) => response.json());
};