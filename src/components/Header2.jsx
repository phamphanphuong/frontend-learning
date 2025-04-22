const Header = () => {
    return (
        <div className="bg-blue-400 w-full flex items-center justify-between">
                <div className="flex items-center space-x-4">
                        <h1 className="text-[30px] uppercase font-bold text-red-700">MOVIE 2</h1>
                        <nav className="flex items-center space-x-4">
                                <a href="#" className="text-white">Home</a>
                                <a href="#" className="text-white">About</a>
                                <a href="#" className="text-white">Contact</a>
                        </nav>
                        <div className="flex items-center space-x-4">
                                <input type="text" name="" id="" placeholder="Search"
                                className="p-3 text-white" />
                                <button className="p-2 text-white bg-red-700">Search</button>
                        </div>
                </div>
        </div>
    );
}

export default Header;
