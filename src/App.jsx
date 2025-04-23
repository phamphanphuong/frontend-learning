import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  function HomePage({ searchResults, nowPlaying, popular, topRated }) {
    return (
      <>
        {/* <Header /> */}
        <Header onSearch={(results) => setSearchResults(results)} />

        {searchResults.length > 0 && (
          <MovieList title="Kết quả tìm kiếm" data={searchResults} />
        )}
        <Banner />
        <MovieList title="Now Playing" data={nowPlaying} />
        <MovieList title="Popular" data={popular} />
        <MovieList title="Top Rated" data={topRated} />
        <Footer />
      </>
    );
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const urls = {
          nowPlaying:
            "https://api.themoviedb.org/3/movie/now_playing?language=vi&page=1",
          popular:
            "https://api.themoviedb.org/3/movie/popular?language=vi&page=1",
          topRated:
            "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1",
        };

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };

        const [nowPlayingRes, popularRes, topRatedRes] = await Promise.all([
          fetch(urls.nowPlaying, options),
          fetch(urls.popular, options),
          fetch(urls.topRated, options),
        ]);

        const [nowPlayingData, popularData, topRatedData] = await Promise.all([
          nowPlayingRes.json(),
          popularRes.json(),
          topRatedRes.json(),
        ]);

        setNowPlaying(nowPlayingData.results || []);
        setPopular(popularData.results || []);
        setTopRated(topRatedData.results || []);
      } catch (error) {
        console.error("Lỗi khi tải phim:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            searchResults={searchResults}
            nowPlaying={nowPlaying}
            popular={popular}
            topRated={topRated}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
