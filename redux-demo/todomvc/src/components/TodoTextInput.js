import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TextTodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({text: e.target.value});
    }

    handleBlur(e) {
        e.preventDefault();
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    }

    render() {
        return (
            <input classNames={classnames({
                edit: this.props.editing,
                'new-todo': this.props.newTodo
            })}
            type='text'
            placeholder={this.props.placeholder}
            autoFocus='true'
            value={this.state.text}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleSubmit.bind(this)}/>
        );
    }
}

