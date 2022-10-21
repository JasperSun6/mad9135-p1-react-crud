import React, { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import LocalStorage from "../hook/LocalStorage/LocalStorage";

// Create Context
const GlobalContext = createContext();

// Provider Component
const GlobalProvider = ({ children }) => {
  const [list, setList] = LocalStorage("song", []);

  const initialState = {
    songs: list,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addSong = (song) => {
    dispatch({
      type: "addSong",
      payload: song,
    });
    setList([...list, song]);
  };

  const editSong = (song) => {
    dispatch({
      type: "editSong",
      payload: song,
    });
  };

  const removeSong = (id) => {
    if (window.confirm("Are you sure you want to delete this song?") === true) {
      dispatch({
        type: "removeSong",
        payload: id,
      });
      setList(...list);
    }
  };

  useEffect(() => {
    setList(state.songs);
  }, [state]);
  return (
    <>
      <GlobalContext.Provider
        value={{
          songs: state.songs,
          addSong,
          editSong,
          removeSong,
          list,
          setList,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}

export { useGlobalContext, GlobalProvider };
