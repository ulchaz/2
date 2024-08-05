import { getTasks, addTask, removeTask } from './tasks.js';

const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const textInputElement = document.getElementById("text-input");

const renderTasks = () => {
    const tasks = getTasks();
    const tasksHtml = tasks.map((task) => 
        `<li class="task">
            <p class="task-text">
                ${task.text}
                <button data-id="${task.id}" class="button delete-button">Удалить</button>
            </p>
        </li>`).join("");

    listElement.innerHTML = tasksHtml;
    
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const id = deleteButton.dataset.id;
            removeTask(id).then(renderTasks);
        });
    });
};

export const initializeUI = () => {
    buttonElement.addEventListener("click", () => {
        if (textInputElement.value === "") {
            return;
        }

        buttonElement.disabled = true;
        buttonElement.textContent = "Элемент добавляется...";

        addTask(textInputElement.value)
            .then(renderTasks)
            .finally(() => {
                buttonElement.disabled = false;
                buttonElement.textContent = "Добавить";
                textInputElement.value = "";
            });
    });

    renderTasks();
};