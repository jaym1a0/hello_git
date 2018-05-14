import React, { Component } from 'react';
import Record from './Record';
import RecordForm from './RecordForm';
import {Table} from 'react-bootstrap';
import {getJSON} from 'jquery';
import * as RecordsAPI from '../utils/RecordsAPI';

class Records extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            records: [
            ]
        }
    }

    componentDidMount() {
        /*
        getJSON('http://5af149cf30f9490014ead7d9.mockapi.io/api/v1/records').then(function(res, err){
            if (!err) {
                console.log('error: ' + err.responseText);
                this.setState({
                    error: err.responseText,
                    isLoaded: true
                });
            } else {
                console.log(res);
                this.setState({
                    records: res,
                    isLoaded: true
                });
            }
        }.bind(this))
        */
        //axios.get('http://5af149cf30f9490014ead7d9.mockapi.io/api/v1/records').then(response => this.setState({
        RecordsAPI.getAll().then(response => this.setState({
            records: response.data,
            isLoaded: true
        })
        ).catch(
            error => this.setState({
                isLoaded: true,
                error: error.message
            })
        )
    }

    addRecord(record) {
        console.log(record);
        this.setState({
            error: null,
            isLoaded: true,
            records: [
                ...this.state.records,
                record
            ]
        });
    }

    updateRecord(record, data) {
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.map( (item, index) => {
            if(index != recordIndex) {
                return item;
            }

            return {
                ...item,
                ...data
            }

        });

        this.setState((prevState, props) => ({records: newRecords}));
        console.log(newRecords);
    }

    render() {
        const { error, isLoaded, records } = this.state;
        if (error) {
            return <div>Error: {error}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <h2>Records</h2>
                    <RecordForm handleNewRecord={this.addRecord.bind(this)}></RecordForm>
                    <br/>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record, i)=><Record key={i} record={record} handleEditRecord={this.updateRecord.bind(this)}/>)}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

export default Records;
