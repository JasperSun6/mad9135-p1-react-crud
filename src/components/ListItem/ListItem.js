import React, { useState } from "react";
import { useGlobalContext } from "../../context/GlobalState";
import SongForm from "../../components/SongForm/SongForm";
import SongItem from "../../components/SongItem/SongItem";
import { ListGroupItem, Button, Container } from "reactstrap";
import "./ListItem.css";

const ListItem = () => {
  const { songs } = useGlobalContext();
  const [edit, setEdit] = useState(false);

  return (
    <>
      {songs.map((song) => (
        <SongItem song={song} />
      ))}
    </>
  );
};

export default ListItem;
