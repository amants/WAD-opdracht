import React from 'react';
import Input from './Input'


const CreatePlaylist = () => {
    
    return (
        <div>
            <Input type="text" label="Playlist name" />
            <Input type="submit" label="Create" onClick="createPlaylistHandler()" />
        </div>
    );
}

export default CreatePlaylist;