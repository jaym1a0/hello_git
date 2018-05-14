import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }

    handleToggle(e) {
        this.setState({
            edit: !this.state.edit
        });
    }

    handleEdit(e) {
        e.preventDefault();

    }

    recordRow() {
        return (
            <tr key={this.props.record.id}>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{this.props.record.amount}</td>
                <td>
                    <button className='btn btn-info' onClick={this.handleToggle.bind(this)}>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        );
    }

    recordForm() {
        return (
            <tr key={this.props.record.id}>
                <td>
                    <input type="text" className='form-control' defaultValue={this.props.record.date} />
                </td>
                <td>
                    <input type="text" className='form-control' defaultValue={this.props.record.title} />
                </td>
                <td>
                    <input type="text" className='form-control' defaultValue={this.props.record.amount} />
                </td>
                <td>
                    <button className='btn btn-info' onClick={this.handleEdit.bind(this)}>Update</button>
                    <button className='btn btn-danger' onClick={this.handleToggle.bind(this)}>Cancel</button>
                </td>
            </tr>
        );
    }
    render() {
        if (this.state.edit) {
            return this.recordForm();
        } else {
            return this.recordRow();
        }
    }
}

export default Record;

Record.propTypes = {
    id: PropTypes.number,
    date: PropTypes.number,
    title: PropTypes.string,
    amount: PropTypes.number
}


