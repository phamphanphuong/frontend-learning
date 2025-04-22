const Footer = () => {
    return (
      <footer className="bg-black text-gray-300 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Thông tin công ty */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p>
              Quý vị hợp tác xin hãy gọi số 0915514419, gặp Mr. Phương.
            </p>
          </div>
  
          {/* Liên kết nhanh */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Mạng xã hội */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
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
  