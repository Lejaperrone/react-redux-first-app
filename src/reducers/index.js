import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Cancion 1', duration: '4:07' },
        { title: 'Cancion 2', duration: '3:27' },
        { title: 'Cancion 3', duration: '2:31' },
        { title: 'Cancion 4', duration: '2:07' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});