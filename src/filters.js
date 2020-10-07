// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}
// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
// These codes is without Destructuring
// const setFilters = (updates) => {
//     if (typeof updates.searchText === 'string') {
//         filters.searchText = updates.searchText
//     }
//     if (typeof updates.hideCompleted === 'boolean') {
//         filters.hideCompleted = updates.hideCompleted
//     }
// }

const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

// Make sure to set up the exports
export { getFilters, setFilters }