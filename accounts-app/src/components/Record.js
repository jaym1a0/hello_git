import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Record extends Component {
    render() {
        return (
            <tr key={this.props.record.id}>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{this.props.record.amount}</td>
            </tr>
        );
    }
}

export default Record;

Record.propTypes = {
    id: PropTypes.number,
    date: PropTypes.number,
    title: PropTypes.string,
    amount: PropTypes.number
}


