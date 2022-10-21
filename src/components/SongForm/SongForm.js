import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import "./SongForm.css";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const SongForm = (props) => {
  const { id, setEdit, song } = props;
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [released, setReleased] = useState("");
  const { addSong, editSong } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setName(song.name);
      setArtist(song.artist);
      setReleased(song.released);
    }
  }, [id, song]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newSong = {
      id: uuid(),
      name,
      artist,
      released,
    };

    const updateSong = {
      id,
      name,
      artist,
      released,
    };

    if (!id) {
      addSong(newSong);
      navigate("/");
    } else {
      editSong(updateSong);
      setEdit(false);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeArtist = (e) => {
    setArtist(e.target.value);
  };

  const onChangeReleased = (e) => {
    setReleased(e.target.value);
  };

  return (
    <Container className="form">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={onChangeName}
            name="name"
            placeholder="Enter song name"
            required
          ></Input>
          <Label>Artist</Label>
          <Input
            type="text"
            value={artist}
            onChange={onChangeArtist}
            artist="artist"
            placeholder="Enter the artist"
            required
          ></Input>
          <Label>Released</Label>
          <Input
            type="text"
            value={released}
            onChange={onChangeReleased}
            released="released"
            placeholder="Enter the released year"
            required
          ></Input>
        </FormGroup>
        <div className="formBtn">
          <Button type="submit">Submit</Button>
          <Link
            onClick={() => {
              setEdit(false);
            }}
            to="/"
            className="btn btn-danger ml-2"
          >
            Cancel
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default SongForm;
