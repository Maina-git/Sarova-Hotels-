import { FaHotel, FaGlobeAfrica, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <>

      <section
        id="about"
        className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800">
              About Sarova Hotels
            </h1>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Sarova Hotels is one of Kenya's premier hospitality brands,
              offering world-class accommodation, exceptional dining,
              and unforgettable guest experiences across iconic destinations.
              We are committed to delivering luxury, comfort, and personalized
              service in every stay.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <FaHotel className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800">12+</h2>
              <p className="text-gray-500 mt-2">Luxury Hotels</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <FaUsers className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800">80K+</h2>
              <p className="text-gray-500 mt-2">Happy Guests</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <FaGlobeAfrica className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800">5+</h2>
              <p className="text-gray-500 mt-2">Destinations</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <FaAward className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800">4.9★</h2>
              <p className="text-gray-500 mt-2">Guest Rating</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative overflow-hidden  shadow-2xl min-h-137.5">

              <img
                src="/images/ejuplila-hotel-plaza-2832924.jpg"
                alt="Sarova Hotel"
                className="w-full h-full object-cover"/>

              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h2 className="text-3xl font-bold">
                  Redefining Luxury Hospitality
                </h2>

                <p className="mt-4 text-gray-200">
                  Every stay is crafted with elegance, comfort,
                  and attention to detail.
                </p>
              </div>

            </div>

  
            <div className="flex flex-col justify-center">

              <h2 className="text-4xl font-bold text-gray-800">
                Our Commitment
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                At Sarova Hotels, we believe hospitality is more than
                accommodation — it is about creating memorable experiences.
                From world-class suites to exceptional dining and personalized
                service, we ensure every guest feels valued and cared for.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Whether you are traveling for business, leisure,
                or special occasions, our hotels provide the perfect blend
                of luxury, comfort, and Kenyan warmth. We continue to innovate
                and expand our services to meet global standards of excellence.
              </p>

              <div className="mt-8 flex gap-4">

                <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition">
                  Explore Hotels
                </button>

                <button className="px-8 py-3 border border-yellow-500 text-yellow-600 hover:bg-yellow-50 rounded-xl font-semibold transition">
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="bg-black py-10 text-white">

        <div className="max-w-7xl mx-auto px-6">


          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Why Choose Sarova Hotels?
            </h2>

            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
              Experience unmatched luxury, world-class hospitality,
              and unforgettable stays across Kenya's most sought-after
              destinations.
            </p>

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Luxury Rooms
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Elegant suites with modern interiors, premium bedding,
                and breathtaking views designed for ultimate comfort.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Fine Dining
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Enjoy world-class cuisine prepared by expert chefs using
                fresh local and international ingredients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Premium Service
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Personalized hospitality ensuring every guest enjoys
                a seamless and memorable experience.
              </p>
            </div>

          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20">

            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-bold text-yellow-400">
                20+
              </h3>
              <p className="mt-2 text-gray-300">
                Years Experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-bold text-yellow-400">
                50K+
              </h3>
              <p className="mt-2 text-gray-300">
                Happy Guests
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-bold text-yellow-400">
                10+
              </h3>
              <p className="mt-2 text-gray-300">
                Luxury Hotels
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-bold text-yellow-400">
                4.9★
              </h3>
              <p className="mt-2 text-gray-300">
                Guest Rating
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;




