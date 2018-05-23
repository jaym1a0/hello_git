import * as types from '../constants/ActionTypes';
import * as filters from '../constants/TodoFilters';

let nextTodoId = 0;
export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    };
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id
    };
}

export function editTodo(id, text) {
    return {
        type: types.EDIT_TODO,
        id,
        text
    };
}

export function toggleTodo(id) {
    return {
        type: types.TOGGLE_TODO,
        id
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
}

export const VisibilityFilters = {
    SHOW_ALL: filters.SHOW_ALL,
    SHOW_COMPLETED: filters.SHOW_COMPLETED,
    SHOW_ACTIVE: filters.SHOW_ACTIVE
}
