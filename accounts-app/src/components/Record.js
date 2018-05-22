import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../utils/RecordsAPI';

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
        //e.preventDefault();
        console.log(this.refs);
        const data = {
            date: this.refs.date.value,
            title: this.refs.title.value,
            amount: this.refs.amount.value
        }
        RecordsAPI.update(this.props.record.id, data).then(
            response => {
                this.setState({edit: false});
                this.props.handleEditRecord(this.props.record, response.data);
            }).catch(
                error => console.log(error.message)
            );
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
                    <input type="text" className='form-control' defaultValue={this.props.record.date} ref='date'/>
                </td>
                <td>
                    <input type="text" className='form-control' defaultValue={this.props.record.title} ref='title'/>
                </td>
                <td>
                    <input type="text" className='form-control' defaultValue={this.props.record.amount} ref='amount'/>
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


