import { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const bookings = [
  {
    id: 1,
    hotel: "Sarova Stanley",
    room: "Executive Suite",
    checkIn: "15 Jun 2026",
    checkOut: "18 Jun 2026",
    guests: 2,
    image: "/images/hotel1.jpg",
    status: "Confirmed",
  },
  {
    id: 2,
    hotel: "Sarova Whitesands",
    room: "Ocean View Room",
    checkIn: "20 Jul 2026",
    checkOut: "25 Jul 2026",
    guests: 3,
    image: "/images/hotel2.jpg",
    status: "Confirmed",
  },
  {
    id: 3,
    hotel: "Sarova Mara",
    room: "Luxury Tent",
    checkIn: "10 Aug 2026",
    checkOut: "13 Aug 2026",
    guests: 2,
    image: "/images/hotel3.jpg",
    status: "Pending",
  },
];

const reviews = [
  {
    id: 1,
    name: "James Mwangi",
    stars: 5,
    review:
      "Exceptional service and luxurious rooms. The staff were incredibly welcoming throughout our stay.",
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    stars: 4,
    review:
      "Beautiful hotel with excellent facilities and amazing customer service.",
  },
  {
    id: 3,
    name: "David Otieno",
    stars: 5,
    review:
      "One of the best hotel experiences I have ever had. Highly recommended.",
  },
  {
    id: 4,
    name: "Grace Akinyi",
    stars: 5,
    review:
      "Everything exceeded my expectations. The rooms were clean and elegant.",
  },
  {
    id: 5,
    name: "Peter Kamau",
    stars: 4,
    review:
      "Wonderful stay with great hospitality and breathtaking views.",
  },
];

const BookingSection = () => {
  const [showBookings, setShowBookings] = useState(false);

  return (
    <section
      id="bookings"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">


        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold text-gray-800">
              My Bookings
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Manage your reservations, review your upcoming stays,
              and experience luxury hospitality with Sarova Hotels.
              View your booking history, room details, travel dates,
              and reservation status all in one place.
            </p>

            <button
              onClick={() => setShowBookings(true)}
              className="mt-8 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition">
              View My Bookings
            </button>

          </div>
          <div className="space-y-5">

            {bookings.slice(0, 2).map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl shadow-lg p-5 flex gap-4">
                <img
                  src={booking.image}
                  alt={booking.hotel}
                  className="w-28 h-28 rounded-xl object-cover"/>

                <div>
                  <h3 className="text-xl font-semibold">
                    {booking.hotel}
                  </h3>

                  <p className="text-gray-600">
                    {booking.room}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {booking.checkIn} - {booking.checkOut}
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>

        <div className="mt-32">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold text-gray-800">
              Guest Reviews
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Discover what our guests have to say about their
              unforgettable experiences at Sarova Hotels.
            </p>
          </div>

          <div className="relative">

            <button
              className="reviews-prev absolute left-0 top-1/2 -translate-y-1/2 z-20
              bg-black/60 hover:bg-black text-white p-4 rounded-full">
              <FaChevronLeft />
            </button>

            <button
              className="reviews-next absolute right-0 top-1/2 -translate-y-1/2 z-20
              bg-black/60 hover:bg-black text-white p-4 rounded-full">
              <FaChevronRight />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              loop
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".reviews-prev",
                nextEl: ".reviews-next",
              }}
              spaceBetween={24}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}>
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white p-8 rounded-3xl shadow-lg h-full">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {review.name}
                    </h3>

                    <div className="flex gap-1 mt-3">
                      {[...Array(review.stars)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-yellow-500"/>
                      ))}
                    </div>

                    <p className="mt-5 text-gray-600 leading-relaxed">
                      "{review.review}"
                    </p>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>

      </div>

    
      {showBookings && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">

          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">

            <button
              onClick={() => setShowBookings(false)}
              className="absolute right-6 top-6 text-gray-500 hover:text-red-500">
              <FaTimes size={24} />
            </button>

            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              My Bookings
            </h2>

            <div className="space-y-6">

              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border rounded-2xl p-5 flex flex-col md:flex-row gap-5">
                  <img
                    src={booking.image}
                    alt={booking.hotel}
                    className="w-full md:w-52 h-40 rounded-xl object-cover"/>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {booking.hotel}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Room: {booking.room}
                    </p>

                    <p className="text-gray-600">
                      Guests: {booking.guests}
                    </p>

                    <p className="text-gray-600">
                      Check-In: {booking.checkIn}
                    </p>

                    <p className="text-gray-600">
                      Check-Out: {booking.checkOut}
                    </p>

                    <span className="inline-block mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      )}
    </section>
  );
};

export default BookingSection;