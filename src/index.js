// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

/* ***************
import { getFilters, setFilters } from './filters';

console.log(getFilters())

setFilters({
    searchText: 'Maryland',
    hideCompleted: true
})
console.log(getFilters())
**************** */

// import { getTodos, createTodo, removeTodo, toggleTodo } from './todos';

// console.log(getTodos())
// // createTodo('Finish another course video')
// // toggleTodo('ba39699c-b031-4e94-a38b-b0c1caaa8c39')
// //removeTodo('ba39699c-b031-4e94-a38b-b0c1caaa8c39')
// console.log(getTodos())

import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})

