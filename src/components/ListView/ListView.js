import React from "react";
import { useGlobalContext } from "../../context/GlobalState";
import ListItem from "../ListItem/ListItem";
import { ListGroup } from "reactstrap";

const ListView = () => {
  const list = useGlobalContext().songs;

  return (
    <ListGroup className="mt-4">
      {list.length > 0 ? (
        <>
          <ListItem />
        </>
      ) : (
        <h4 className="text-center">No songs, please add some.</h4>
      )}
    </ListGroup>
  );
};

export default ListView;
