import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-yellow-500">
              Sarova Hotels
            </h1>

            <p className="mt-4 text-gray-400">
              Delivering luxury hospitality,
              exceptional comfort, and memorable
              experiences across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">
              Quick Links
            </h2>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#hotels">Hotels</a>
              </li>
              <li>
                <a href="#rooms">Rooms</a>
              </li>
              <li>
                <a href="#bookings">Bookings</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold">
              Services
            </h2>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li>Luxury Rooms</li>
              <li>Conference Facilities</li>
              <li>Restaurant & Dining</li>
              <li>Airport Transfers</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-xl font-semibold">
              Follow Us
            </h2>

            <div className="flex gap-4 mt-4">

              <a
                href="#"
                className="bg-yellow-500 p-3 rounded-full"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-yellow-500 p-3 rounded-full"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-yellow-500 p-3 rounded-full"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-yellow-500 p-3 rounded-full"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 Sarova Hotels. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;