import React from "react";
import { useGlobalContext } from "../../context/GlobalState";
import SongItem from "../../components/SongItem/SongItem";

const ListItem = () => {
  const { songs } = useGlobalContext();

  return (
    <>
      {songs.map((song) => (
        <SongItem song={song} key={song.id} />
      ))}
    </>
  );
};

export default ListItem;
