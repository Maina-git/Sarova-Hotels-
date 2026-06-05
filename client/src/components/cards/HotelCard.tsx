import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import RoomModal from "../modals/RoomModal";

const HotelCard = ({ hotel }: any) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-white shadow-lg overflow-hidden rounded-2xl hover:shadow-2xl transition duration-300">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-60 object-cover"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold text-gray-800">
            {hotel.name}
          </h2>

          <div className="flex items-center gap-2 text-yellow-600 mt-2">
            <FaLocationDot />
            <span>{hotel.location}</span>
          </div>

          <p className="text-gray-600 text-sm mt-3">
            {hotel.description}
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span>{hotel.rating}</span>
            </div>

            <span className="text-sm text-gray-500">
              {hotel.reviews} reviews
            </span>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500">
              From
            </p>

            <h3 className="text-xl font-bold text-yellow-600">
              KES {hotel.price}
            </h3>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="w-full mt-5 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition cursor-pointer"
          >
            View Rooms
          </button>

        </div>
      </div>

      <RoomModal
        hotelName={hotel.name}
        hotelLocation = {hotel.location}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
   
      </>
  );
};

export default HotelCard;













