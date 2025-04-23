import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=vi`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Lỗi khi tải chi tiết phim:", err);
      }
    };
    fetchDetail();
  }, [id]);

  if (!movie) return <div className="text-white p-8">Đang tải...</div>;

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-4">{movie.overview}</p>
      <p>Ngày phát hành: {movie.release_date}</p>
    </div>
  );
};

export default MovieDetail;
