import React, { useState } from "react";
import { useGlobalContext } from "../../context/GlobalState";
import SongForm from "../../components/SongForm/SongForm";
import "./SongItem.css";
import { ListGroupItem, Button, Container } from "reactstrap";

const SongItem = ({ song }) => {
  const { editSong, removeSong } = useGlobalContext();
  const [edit, setEdit] = useState(false);

  return (
    <Container>
      <div style={edit ? { display: "block" } : { display: "none" }}>
        <SongForm setEdit={setEdit} id={song.id} key={song.id} />
      </div>

      <ListGroupItem
        className="list"
        key={song.id}
        style={edit ? { display: "none" } : { display: "block" }}
      >
        <div>
          <p className="songName">
            {song.name.charAt(0).toUpperCase() + song.name.slice(1)}
          </p>
          <div className="sub-detail">
            <p>
              Artist:{" "}
              {song.artist.charAt(0).toUpperCase() + song.artist.slice(1)}
            </p>
            <p>Released Year: {song.released}</p>
          </div>
        </div>
        <div className="ml-auto list-button">
          <Button
            onClick={() => {
              setEdit(true);
              return editSong({
                id: song.id,
                name: song.name,
                artist: song.artist,
                released: song.released,
              });
            }}
            color="warning"
            className="btn btn-warning mr-1"
          >
            Edit
          </Button>
          <Button onClick={() => removeSong(song.id)} color="danger">
            Delete
          </Button>
        </div>
      </ListGroupItem>
    </Container>
  );
};

export default SongItem;
