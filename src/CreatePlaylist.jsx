import React, { Component } from 'react';
import Input from './Input'


class CreatePlaylist extends Component {
    render = () => {
        return (
            <div>
                <Input type="text" label="Playlist name" />
                <Input type="submit" label="Create" />
            </div>
        );
    }
}

export default CreatePlaylist;