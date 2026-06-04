import {  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

      
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We are committed to making your stay exceptional.
            Reach out to our hospitality team for reservations,
            special requests, event bookings, or any inquiries
            about our hotels and services.
          </p>
        </div>

      
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative overflow-hidden shadow-2xl">

            <img
              src="/images/pexels-las-vegas-1846684.jpg "
              alt="Sarova Hotel"
              className="w-full h-175 object-cover"
            />

          
            <div className="absolute inset-0 bg-black/50"></div>

      
            <div className="absolute bottom-0 left-0 p-10 text-white">

              <h2 className="text-4xl md:text-5xl font-bold">
                Experience Luxury Hospitality
              </h2>

              <p className="mt-5 text-gray-200 leading-relaxed max-w-lg">
                Whether you're planning a family vacation,
                business trip, romantic getaway, or special
                event, our dedicated team is ready to help
                create unforgettable experiences tailored
                specifically to your needs.
              </p>

            </div>

          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-xl">

            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-xl transition duration-300">
                Send Message
              </button>

            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

              <div className="bg-white p-5 rounded-2xl shadow text-center">
                <FaPhoneAlt className="mx-auto text-yellow-500 text-2xl mb-3" />
                <h3 className="font-semibold text-gray-800">
                  Phone
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  +254 700 000 000
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow text-center">
                <FaEnvelope className="mx-auto text-yellow-500 text-2xl mb-3" />
                <h3 className="font-semibold text-gray-800">
                  Email
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  reservations@sarovahotels.com
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow text-center">
                <FaMapMarkerAlt className="mx-auto text-yellow-500 text-2xl mb-3" />
                <h3 className="font-semibold text-gray-800">
                  Location
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;