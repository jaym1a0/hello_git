import React, { Component } from 'react';
import * as RecordsAPI from '../utils/RecordsAPI';

class RecordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            title: '',
            amount: ''
        }
    }

    handleChange(e) {
        e.preventDefault();
        let name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    valid() {
        return this.state.date && this.state.title && this.state.amount;
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            date: this.state.date,
            title: this.state.title,
            amount: Number.parseInt(this.state.amount)
        };
        RecordsAPI.create(data).then(response => {
            this.props.handleNewRecord(response.data);
            this.setState({
                date: '',
                title: '',
                amount: ''
            });
        }).catch( error => console.log(error.message))
    }

    render() {
        return (
            <form className='form-inline' onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-group col-sm-2'>
                    <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange.bind(this)}/>
                </div>
                <div className='form-group col-sm-2'>
                    <input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
                </div>
                <div className='form-group col-sm-2'>
                    <input type="text" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange.bind(this)}/>
                </div>
                <button type='submit' className='btn btn-primary' disabled={!this.valid()}>Create Records</button>
            </form>
        );
    }
}

export default RecordForm;
