import React from 'react';
import playlist from './playlist.json';
import PlaylistItem from './PlaylistItem';



const Music = () => {
    return (        
        playlist.map((pl,i) => {
            return <div key={i}><h2 key={i+1}>{pl.name}</h2><PlaylistItem key={i+2} playlist={pl.songs} /></div>;
        })
    )
}


export default Music;