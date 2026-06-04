import { FaHotel, FaGlobeAfrica, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800">
            About Sarova Hotels
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Sarova Hotels is one of Kenya’s premier hospitality brands,
            offering world-class accommodation, exceptional dining,
            and unforgettable guest experiences across iconic destinations.
            We are committed to delivering luxury, comfort, and personalized service
            in every stay.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <FaHotel className="text-3xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">12+</h2>
            <p className="text-gray-500 mt-2">Luxury Hotels</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <FaUsers className="text-3xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">80K+</h2>
            <p className="text-gray-500 mt-2">Happy Guests</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <FaGlobeAfrica className="text-3xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">5+</h2>
            <p className="text-gray-500 mt-2">Destinations</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <FaAward className="text-3xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">4.9★</h2>
            <p className="text-gray-500 mt-2">Guest Rating</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden shadow-2xl">
            <img
              src="/images/ejuplila-hotel-plaza-2832924.jpg"
              alt="Sarova Hotel"
              className="w-full h-125 object-cover"/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 p-10 text-white">
              <h2 className="text-3xl font-bold">
                Redefining Luxury Hospitality
              </h2>
              <p className="mt-4 text-gray-200">
                Every stay is crafted with elegance, comfort, and attention to detail.
              </p>
            </div>

          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Commitment
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              At Sarova Hotels, we believe hospitality is more than accommodation —
              it is about creating memorable experiences. From world-class suites
              to exceptional dining and personalized service, we ensure every guest
              feels valued and cared for.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you are traveling for business, leisure, or special occasions,
              our hotels provide the perfect blend of luxury, comfort, and Kenyan warmth.
              We continue to innovate and expand our services to meet global standards
              of excellence.
            </p>
            <button className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition">
              Explore Our Hotels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;