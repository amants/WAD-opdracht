import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import InputLabel from './InputLabel';
import playlist from './playlist.json';

const Input = (props) => {

    if (props.type === "submit") {
        return (
            <label>
                <input type={props.type} value={props.label} /><br />
            </label>
        );
    } else if (props.type === "select") {
        return (
            <label>
                <select>
                    {playlist.map((playlist, i) => {
                        return <option key={i} value={i}>{playlist.name}</option>;
                    })
                    }
                </select>
            </label>
        );
    } else {
        return (

            <label>
                <InputLabel value={props.label} />:<br />
                <input type={props.type} /><br />
            </label>
        );
    }

}

export default Input