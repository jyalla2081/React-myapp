import React, { Component } from "react";
import LikeComponent from "./LikeComponent";

const MovieTable = (props) => {
  const { movies, onLike, onDelete } = props;
  return (
    <table className="table m-2">
      <thead className="bg-dark text-light">
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>No Of Stock</th>
          <th>Rental Rate</th>
          <th>Like</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <LikeComponent
                liked={movie.liked}
                onLike={() => onLike(movie)}
              ></LikeComponent>
            </td>
            <td>
              {
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
