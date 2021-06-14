import React, { Component } from "react";
import LikeComponent from "./LikeComponent";

class MovieTable extends Component {
  state = {};

  raisedSort = (path) => {
    let prevSort = this.props.sortColumn;

    if (prevSort.path === path) {
      prevSort.order = prevSort.order === "asc" ? "desc" : "asc";
    } else {
      prevSort.path = path;
      prevSort.order = "asc";
    }
    this.props.onSort(prevSort);
  };

  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className="table m-2">
        <thead className="bg-dark text-light">
          <tr>
            <th onClick={() => this.raisedSort("title")}>Title</th>
            <th onClick={() => this.raisedSort("genre.name")}>Genre</th>
            <th onClick={() => this.raisedSort("numberInStock")}>
              No Of Stock
            </th>
            <th onClick={() => this.raisedSort("dailyRentalRate")}>
              Rental Rate
            </th>
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
  }
}

export default MovieTable;
