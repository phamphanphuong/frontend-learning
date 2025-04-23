import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header hideSearch={true} />
      <div className="bg-black text-gray-800 px-8 py-16 min-h-screen">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-red-500 drop-shadow-lg">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full text-center">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Nếu bạn có bất kỳ câu hỏi, góp ý hoặc đề xuất nào, hãy liên hệ với
              chúng tôi qua:
            </p>
            <ul className="text-left list-disc list-inside text-lg text-gray-700 space-y-3">
              <li>
                www.{" "}
                <span className="text-red-500 font-medium">youtube.io.vn</span>
              </li>
              <li>
                Facebook:{" "}
                <span className="text-red-500 font-medium">
                  fb.com/youtube.io.vn
                </span>
              </li>
              <li>
                Zalo:{" "}
                <span className="text-red-500 font-medium">09155.144.19</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
