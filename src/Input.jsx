import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import InputLabel from './InputLabel';

const Input = (props) => {

    return (
        <label>
            <InputLabel value={props.label} />:<br />
            <input type={props.type} /><br />
        </label>
    )
}

export default Input