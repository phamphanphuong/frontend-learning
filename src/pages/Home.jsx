import Banner from "../components/Banner";
import MovieList from "../components/MovieList";

const Home = ({ nowPlaying, popular, topRated, searchResults }) => {
  return (
    <div className="bg-black text-white px-4">
      {searchResults.length > 0 && (
        <MovieList title="Kết quả tìm kiếm" data={searchResults} />
      )}
      <Banner />
      <MovieList title="Now Playing" data={nowPlaying} />
      <MovieList title="Popular" data={popular} />
      <MovieList title="Top Rated" data={topRated} />
    </div>
  );
};

export default Home;
