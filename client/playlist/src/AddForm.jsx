import React from 'react';
import Input from './Input'


const AddForm = () => {
    return (
        <div>
            <Input type="text" label="Youtube Link" />
            <Input type="select" label="Select playlist" />
            <Input type="submit" label="Add" />
        </div>
    );
}

export default AddForm;