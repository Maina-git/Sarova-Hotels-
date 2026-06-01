import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/11952675.54821da71073f.jpg"
              className="w-[50px] h-[50px]"
              alt="logo"
            />
            <h1 className="text-2xl text-gray-500">
              Sarova Hotels
            </h1>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Hotels", "Rooms", "Bookings", "Contacts"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-slate-700 hover:text-yellow-500 transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-yellow-500
                  after:transition-all after:duration-300
                  hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* AUTH BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="px-5 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;






































