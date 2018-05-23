import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, marked, text }) => (
    <li
        onClick = { onClick }
        style = {{ textDecoration: marked ? 'line-throuth' : 'none'}}
    >
        { text }
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Todo;
