import { loadTasks } from './tasks.js';
import { initializeUI } from './ui.js';

loadTasks().then(initializeUI);