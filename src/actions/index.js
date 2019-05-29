// Action creator
export const selectSong = (song) => {
    //Devuelve una accion (objeto)
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};