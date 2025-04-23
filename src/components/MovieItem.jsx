import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md text-white p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{movie.title}</h2>
      <div className="flex gap-2 mt-2">
        <Link
          to={`/movie/${movie.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Chi Tiết
        </Link>
        <a
          href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          Xem Phim
        </a>
      </div>
    </div>
  );
};

export default MovieItem;
