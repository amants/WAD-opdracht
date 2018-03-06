import React, { Component } from 'react'; // eslint-disable-line
import playlist from './playlist.json';
import PlaylistItem from './PlaylistItem';



class Music extends Component {

    render = () => {
        return (
            
            playlist.map((pl,i) => {
                return <div key={i}><h2 key={i+1}>{pl.name}</h2><PlaylistItem key={i+2} playlist={pl.songs} /></div>;
            })
        )
    }
}
export default Music;