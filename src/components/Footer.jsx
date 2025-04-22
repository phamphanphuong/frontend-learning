const Footer = () => {
    return (
      <footer className="bg-black text-gray-300 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Thông tin công ty */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hợp tác</h3>
            <p>
              Xin hãy gọi số 0915514419, gặp Mr. Phương, để biết thêm chi tiết.
            </p>
          </div>
  
        
  
          {/* Mạng xã hội */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Mạng xã hội</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <span className="fab fa-facebook"></span> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <span className="fab fa-twitter"></span> Twitter
              </a>
              <a href="#" className="hover:text-white">
                <span className="fab fa-instagram"></span> Instagram
              </a>
            </div>
          </div>
        </div>
  
        {/* Bản quyền */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
          &copy; 2025 Chương trình demo sử dụng React + Vite by Phương.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  