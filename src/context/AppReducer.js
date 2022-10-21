function AppReducer(state, action) {
  switch (action.type) {
    case "addSong":
      return {
        ...state,
        songs: [action.payload, ...state.songs],
      };

    case "editSong":
      const updateSong = action.payload;
      const updateSongs = state.songs.map((song) => {
        if (song.id === updateSong.id) {
          return updateSong;
        }
        return song;
      });
      return {
        ...state,
        songs: updateSongs,
      };

    case "removeSong":
      return {
        ...state,
        songs: state.songs.filter((song) => {
          if (song.id !== action.payload) {
            return song;
          }
          return false;
        }),
      };

    default:
      return state;
  }
}

export default AppReducer;
