import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo } from '../actions/TodoActions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            console.log('Unkown filter: ' + filter);
            //throw new Error('Unkown filter: ' + filter);
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visiblityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTod: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
