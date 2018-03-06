import React, { Component } from 'react';
import Input from './Input'


class AddForm extends Component {
    render = () => {
        return (
            <div>
                <Input type="text" label="Youtube Link" />
                <Input type="submit" label="Send" />
            </div>
        );
    }
}

export default AddForm;