import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header hideSearch={true} />
      <div className="bg-black text-gray-800 px-8 py-16 min-h-screen">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-red-500 drop-shadow-lg">
          About Us
        </h1>
        <div className="flex justify-center mb-10">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
              Chào mừng bạn đến với{" "}
              <span className="text-red-500">Review Phim</span>!
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Đây là nền tảng nơi bạn có thể khám phá những bộ phim đang chiếu,
              phim được yêu thích, phim có điểm cao nhất, và nhiều điều thú vị
              khác về thế giới điện ảnh.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Chúng tôi xây dựng trang web này để chia sẻ đam mê điện ảnh đến
              với mọi người và giúp bạn dễ dàng tìm được bộ phim yêu thích tiếp
              theo của mình.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
