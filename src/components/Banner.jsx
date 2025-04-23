import { useState } from "react";
import bannerImage from "../assets/dragon.png";

const Banner = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center text-white flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px]"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative text-center px-8 max-w-xl space-y-6 z-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 uppercase mb-4 tracking-wider drop-shadow-lg">
          Dragon Ball
        </h1>

        {/* Rating */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <span className="text-yellow-500 text-3xl">★ ★ ★ ★ ★</span>
          <span className="text-lg">(4.5/5)</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          Dragon Ball là một bộ phim hoạt hình Nhật Bản nổi tiếng, kể về hành
          trình của Son Goku và những người bạn trong việc tìm kiếm ngọc rồng và
          bảo vệ Trái Đất khỏi các thế lực xấu xa.
        </p>

        {/* Trailer Button */}
        <div className="flex justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105"
            onClick={() => setShowTrailer(true)}
          >
            Xem Trailer
          </button>
        </div>
      </div>

      {/* Trailer iframe */}
      {showTrailer && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-20">
          <div className="relative w-[90%] h-[50%] sm:w-[80%] lg:w-[60%]">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/k1hp5Feb1VM?autoplay=1"
              title="Dragon Ball Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1"
              onClick={() => setShowTrailer(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
