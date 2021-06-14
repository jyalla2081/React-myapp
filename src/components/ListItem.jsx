import React from "react";

const ListItem = (props) => {
  const {
    genreList,
    textProperty,
    idProperty,
    selectedGenre,
    handleSelectedGenre,
  } = props;

  return (
    <ul className="list-group">
      {genreList.map((x) => (
        <li
          className={
            x === selectedGenre ? "list-group-item active" : "list-group-item"
          }
          key={x[idProperty]}
          onClick={() => handleSelectedGenre(x)}
        >
          {x[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListItem.defaultProps = {
  idProperty: "_id",
  textProperty: "name",
};

export default ListItem;
