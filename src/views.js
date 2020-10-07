import { getTodos, toggleTodo, removeTodo } from './todos';
import { getFilters } from './filters';

// renderTodos
// Arguments: none
// Return value: none

// Render application todos based on filters
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    // this code without Destructuring
    // const filters = getFilters()
    const { searchText, hideCompleted } = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
        // const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
        // return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    // If todos to show, render them
    // Else, p with class "empty-message" and "no to-dos to show"
    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no to-dos to show'
        todoEl.appendChild(messageEl)
    }
};

// Arguments: todo
// Return value: the todo element
// Get the DOM elements for an individual note

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkboxEl = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    
    // Setup todo checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    containerEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', () => {
        toggleTodo(todo.id)
    });

    // Setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    });

    return todoEl;
};

// Arguments: incompletedTodos
// Return value: the summary element
// Get the DOM elements for an individual note
// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    // Pluralize (todos) unless you only have one (todo)
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
};

// Make sure to set up the exports
export { generateTodoDOM, renderTodos, generateSummaryDOM }