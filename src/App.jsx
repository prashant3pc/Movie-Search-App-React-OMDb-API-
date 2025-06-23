import "./App.css";
import PostCard from "./components/PostCard";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { useEffect, useState } from "react";
// 6e94ff16

const App = () => {
  const API_URL = "http://www.omdbapi.com/?apikey=6e94ff16&s=";

  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };
  useEffect(() => {
    searchMovie("Naruto");
  }, []);
  return (
    <div>
      <Navbar onSearch={searchMovie}></Navbar>
      <Container>
        {movies.map((movie) => (
          <PostCard key={movie.imdbID} movie={movie} />
        ))}
      </Container>
    </div>
  );
};

export default App;
