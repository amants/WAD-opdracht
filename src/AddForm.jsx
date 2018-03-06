import React, { Component } from 'react';
import Input from './Input'


class AddForm extends Component {
    render = () => {
        return (
            <div>
                <Input type="text" label="Youtube Link" />
                <Input type="select" label="Select playlist" />
                <Input type="submit" label="Add" />
            </div>
        );
    }
}

export default AddForm;