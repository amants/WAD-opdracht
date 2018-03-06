import React, { Component } from 'react';

class PlaylistItem extends Component {

    render = () => {

        const { playlist } = this.props;
        //for (let i = 0; i < playlist.songs.length; i++) {
        return (
            playlist.map((plitem,i) => {
                return <li key={i}>{plitem.Artist} - {plitem.Title}</li>
            })
        );
    }
}





export default PlaylistItem;