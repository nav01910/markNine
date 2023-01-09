import { useState } from "react";
import { movies, books, podcasts } from "./database.js";
import "./styles.css";

var movieRecom = movies;
var bookRecom = books;
var podcastRecom = podcasts;

export default function App() {
  const [one, setOne] = useState("recommendations?");

  function fetchRecom(recom) {
    if (recom === "movies") {
      setOne(fetchMovies);
    } else if (recom === "books") {
      setOne(fetchBooks);
    } else {
      setOne(fetchPodcasts);
    }
  }

  function fetchMovies() {
    return movieRecom.map((item) => {
      return (
        <div className="outputDiv">
          <li>Name: {item.name}</li>
          <li>Genre: {item.genre}</li>
          <li>Director: {item.director}</li>
          <li>IMDb: {item.rating}</li>
        </div>
      );
    });
  }

  function fetchBooks() {
    return bookRecom.map((item) => {
      return (
        <div className="outputDiv">
          <li>Name: {item.name}</li>
          <li>Author: {item.author}</li>
          <li>Rating: {item.rating}</li>
        </div>
      );
    });
  }

  function fetchPodcasts() {
    return podcastRecom.map((item) => {
      return (
        <div className="outputDiv">
          <li>Name: {item.name}</li>
          <li>Owner: {item.owner}</li>
          <li>Views: {item.views}</li>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <h1>Welcome to Good-recommendations(dot)com</h1>
      <h2>Click on any category to get started.</h2>
      <div className="container">
        <div className="containerOne">
          <span className="box" onClick={() => fetchRecom("movies")}>
            Movies 🎬
          </span>
          <span className="box" onClick={() => fetchRecom("books")}>
            Books 📕
          </span>
          <span className="box" onClick={() => fetchRecom("pod")}>
            Podcasts 🎙
          </span>
        </div>
        <div className="containerTwo">{one}</div>
      </div>
    </div>
  );
}
