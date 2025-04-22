const Header = () => {
        return (
          <div className="bg-black text-white w-full max-w-full flex flex-wrap items-center justify-between p-4">
            {/* Logo */}
            <h1 className="text-red-600 text-xl sm:text-2xl font-bold uppercase whitespace-nowrap">
              Review Phim
            </h1>
      
            {/* Menu Navigation */}
            <nav className="flex flex-wrap sm:flex-nowrap items-start sm:items-center space-x-2 space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
            </nav>
      
            {/* Search Bar */}
            <div className="flex items-center space-x-2 w-full sm:w-auto mt-4 sm:mt-0">
              <input 
                type="text" 
                placeholder="Search"
                className="bg-gray-800 text-white px-4 py-2 rounded w-full sm:w-auto"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">
                Search
              </button>
            </div>
          </div>
        );
      };
      
      export default Header;
      