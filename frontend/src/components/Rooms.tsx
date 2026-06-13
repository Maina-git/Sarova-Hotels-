import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import { rooms } from "../data/Rooms";
import RoomCard from "./cards/RoomCard";
import RoomPopup from "./modals/RoomPopup";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800">
            Our Rooms
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Experience world-class comfort with our luxury rooms and suites,
            designed to give you elegance, relaxation, and unforgettable stays
            across all Sarova Hotels in Kenya.
          </p>
        </div>

        <div className="relative">

          <button className="rooms-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-4 rounded-full">
            <FaChevronLeft />
          </button>

          <button className="rooms-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-4 rounded-full">
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={900}
            spaceBetween={25}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".rooms-prev",
              nextEl: ".rooms-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}>
            {rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <RoomCard
                  room={room}
                  onBook={() => setSelectedRoom(room)}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      {selectedRoom && (
        <RoomPopup
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}/>
      )}
    </section>
  );
};

export default Rooms;







