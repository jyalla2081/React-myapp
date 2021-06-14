import React, { Component } from "react";
import * as movieApi from "../services/fakeMovieService";
import LikeComponent from "./LikeComponent";

class MovieComponent extends Component {
  state = { movieList: movieApi.getMovies() };

  deleteMovie = (movie) => {
    let movies = this.state.movieList.filter((x) => x._id !== movie._id);
    this.setState({ movieList: movies });
  };

  likeToggle = (movie) => {
    const list = this.state.movieList;
    const index = this.state.movieList.indexOf(movie);
    list[index].liked = !list[index].liked;
    this.setState({ movieList: list });
  };

  render() {
    const count = this.state.movieList.length;
    if (count === 0) return <p>No Movies to Display</p>;
    return (
      <div className="container">
        <p>There are {count} number of Movies</p>
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
            {this.state.movieList.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <LikeComponent
                    liked={movie.liked}
                    onLike={() => this.likeToggle(movie)}
                  ></LikeComponent>
                </td>
                <td>
                  {
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.deleteMovie(movie)}
                    >
                      Delete
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieComponent;
