import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch, hideSearch = false }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (searchQuery = query) => {
    if (!searchQuery.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY_SIMPLE
        }&query=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      if (onSearch) onSearch(data.results || []);
      setSuggestions([]);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleInputChange = async (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim().length > 1) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_API_KEY_SIMPLE
          }&query=${encodeURIComponent(newQuery)}`
        );
        const data = await response.json();
        setSuggestions(data.results?.slice(0, 5) || []);
      } catch (error) {
        console.error("Suggestion error:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (title) => {
    setQuery(title);
    handleSearch(title);
  };

  return (
    <div className="bg-black text-white w-full max-w-full p-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="text-red-600 text-xl sm:text-2xl font-bold uppercase whitespace-nowrap"
        >
          Review Phim
        </Link>

        {/* Menu Navigation */}
        <nav className="flex flex-wrap sm:flex-nowrap items-center gap-x-4 gap-y-2">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Search Bar */}
        {!hideSearch && (
          <div className="relative w-full sm:w-auto mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                className="bg-gray-800 text-white px-4 py-2 rounded w-full sm:w-[250px]"
              />
              <button
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>

            {/* Suggestion Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute z-10 left-0 w-full bg-white text-black rounded mt-1 shadow-lg max-h-60 overflow-y-auto">
                {suggestions.map((movie) => (
                  <li
                    key={movie.id}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() =>
                      handleSuggestionClick(movie.title || movie.original_title)
                    }
                  >
                    {movie.title || movie.original_title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
