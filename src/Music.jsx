import React, { Component } from 'react'; // eslint-disable-line
import playlist from './playlist.json';
import PlaylistItem from './PlaylistItem';



class Music extends Component {

    render = () => {
        /*let songs = "";
        playlist.map(pl => {
            pl.songs.forEach(plitem => {
                songs += <li> plitem.Artist + " - {plitem.Title}</li>
            });
            return songs;
        })*/

            /*playlist.forEach(pl => {
                //pl.songs.forEach(plitem => {
                return <li> {pl.songs[1].Artist} - {pl.songs[1].Title}</li>;
                //})
            })*/

            //return playlist.forEach(pl => <li> {pl.songs[1].Artist} - {pl.songs[1].Title}</li>)
        return (
            
            playlist.map((pl,i) => {
                return <div key={i}><h2 key={i+1}>{pl.name}</h2><PlaylistItem key={i+2} playlist={pl.songs} /></div>;
            })
        )
    }
}
export default Music;