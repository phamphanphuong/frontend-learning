import bannerImage from '../assets/banner.jpg'; // Adjust the path as necessary

const Banner = () => {
  return (
    <div
    className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
    style={{ backgroundImage: `url(${bannerImage})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center px-8 max-w-xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 uppercase mb-4">Dấu ấn rồng thiêng</h1>

        {/* Rating */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <span className="text-yellow-500 text-2xl">★ ★ ★ ★ ★</span>
          <span className="text-lg">(4.5/5)</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-bold">Chi Tiết</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-bold">Xem Phim</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
