import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "black",
    border: "none",
  },
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieList = ({ title, data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  const openModalWithTrailer = async (movieId) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${
          import.meta.env.VITE_API_KEY_SIMPLE
        }`
      );
      const result = await res.json();
      const trailer = result.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) {
        setTrailerKey(trailer.key);
        setIsOpen(true);
      } else {
        alert("Không tìm thấy trailer");
      }
    } catch (error) {
      console.error("Error fetching trailer", error);
    }
  };

  return (
    <div className="bg-black text-white p-10 mb-1">
      <h2 className="text-xl uppercase mb-4">{title}</h2>
      <Carousel responsive={responsive}>
        {data.length > 0 &&
          data.map((movie) => (
            <div
              key={movie.id}
              onClick={() => openModalWithTrailer(movie.id)}
              className="w-[200px] h-[300px] relative group cursor-pointer"
            >
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="absolute top-0 left-0 w-full h-full bg-black/45 rounded-lg" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
                  alt={`${movie.title}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="absolute bottom-0 left-4 uppercase text-md">
                  {movie.title || movie.original_title}
                </p>
              </div>
            </div>
          ))}
      </Carousel>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Trailer Modal"
      >
        {trailerKey && (
          <iframe
            width="640"
            height="390"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="YouTube trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default MovieList;
