import React, { Component } from "react";
import * as movieApi from "../services/fakeMovieService";
import * as genreApi from "../services/fakeGenreService";
import _ from "lodash";

import Pagination from "./Pagination";
import { PaginationUtil } from "../utils/Pagination";
import ListItem from "./ListItem";
import MovieTable from "./MovieTable";

class MovieComponent extends Component {
  state = {
    movieList: [],
    genreList: [],
    countPerPage: 5,
    activePage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      movieList: movieApi.getMovies(),
      genreList: [{ name: "All Movies", _id: "" }, ...genreApi.getGenres()],
    });
  }

  deleteMovie = (movie) => {
    let movies = this.state.movieList.filter((x) => x._id !== movie._id);
    this.setState({ movieList: movies });
  };

  onPageClick = (x) => {
    this.setState({ activePage: x });
  };

  handleSelectedGenre = (x) => {
    console.log(x);
    this.setState({ selectedGenre: x, activePage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  likeToggle = (movie) => {
    const list = this.state.movieList;
    const index = this.state.movieList.indexOf(movie);
    list[index].liked = !list[index].liked;
    this.setState({ movieList: list });
  };

  render() {
    const {
      movieList,
      activePage,
      countPerPage,
      selectedGenre,
      genreList,
      sortColumn,
    } = this.state;
    const count = movieList.length;
    if (count === 0) return <p>No Movies to Display</p>;

    let filteredList =
      selectedGenre && selectedGenre._id
        ? movieList.filter((x) => x.genre._id === selectedGenre._id)
        : movieList;

    let sorted = _.orderBy(filteredList, [sortColumn.path], [sortColumn.order]);

    var paginatedMovies = PaginationUtil(sorted, activePage, countPerPage);

    return (
      <div className="row">
        <div className="col-2">
          <ListItem
            genreList={genreList}
            selectedGenre={selectedGenre}
            idProperty="_id"
            textProperty="name"
            handleSelectedGenre={this.handleSelectedGenre}
          ></ListItem>
        </div>
        <div className="col">
          <p>There are {filteredList.length} number of Movies</p>
          <MovieTable
            movies={paginatedMovies}
            onLike={this.likeToggle}
            onDelete={this.deleteMovie}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          ></MovieTable>
          <Pagination
            items={filteredList.length}
            countPerPage={countPerPage}
            activePage={activePage}
            onPageClick={this.onPageClick}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default MovieComponent;
