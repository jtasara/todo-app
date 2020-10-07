import { v4 as uuidv4 } from 'uuid';

// Setup the empty todos array
let todos = []

// loadTodos instead of getSavedTodos
// Arguments: none
// Return value: none
const loadTodos = () => { 
    const todosJSON = localStorage.getItem('todos');
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        todos = [];
    }
};
// saveTodos
// Arguments: none
// Return value: none
// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos

// createTodo
const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    });
    saveTodos()
}
// Arguments: todo text
// Return value: none

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id );

    if (todoIndex > -1){
        todos.splice(todoIndex, 1);
        saveTodos()
    }
}

// toggleTodo - Toggle the completed value for a given todo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    // this condition is as same as (todo !== undefined)
    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
};

// Make sure to call loadTodos and setup the exports
loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }