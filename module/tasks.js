import { fetchTasks, createTask, deleteTask } from './api.js';

let tasks = [];

export const getTasks = () => tasks;

export const loadTasks = () => {
    return fetchTasks().then((fetchedTasks) => {
        tasks = fetchedTasks;
    });
};

export const addTask = (text) => {
    return createTask(text).then(() => loadTasks());
};

export const removeTask = (id) => {
    return deleteTask(id).then(() => loadTasks());
};