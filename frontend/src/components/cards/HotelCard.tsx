import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import RoomModal from "../modals/RoomModal";

interface Props {
  hotel: {
    id: string;
    name: string;
    image: string;
    location: string;
    description: string;
    rating: number;
    reviews: number;
    startingPrice: number;
  };
}

const HotelCard = ({ hotel }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-white shadow-lg overflow-hidden rounded-2xl hover:shadow-2xl transition duration-300">

        {/* Image */}
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-60 object-cover"
        />

        {/* Content */}
        <div className="p-5">

          <h2 className="text-xl font-bold text-gray-800">
            {hotel.name}
          </h2>

          <div className="flex items-center gap-2 text-yellow-600 mt-2">
            <FaLocationDot />
            <span>{hotel.location}</span>
          </div>

          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            {hotel.description}
          </p>

          {/* Rating */}
          <div className="flex justify-between items-center mt-4">

            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span>{hotel.rating}</span>
            </div>

            <span className="text-sm text-gray-500">
              {hotel.reviews} reviews
            </span>

          </div>

          {/* Price */}
          <div className="mt-4">

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h3 className="text-xl font-bold text-yellow-600">
             KES {hotel.startingPrice.toLocaleString()}
            </h3>

            <p className="text-sm text-gray-500">
              per night
            </p>

          </div>

          {/* Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="
              w-full
              mt-5
              py-3
              rounded-full
              border
              border-gray-300
              font-medium
              hover:bg-gray-100
              transition
              cursor-pointer
            "
          >
            View Rooms
          </button>

        </div>
      </div>
   <RoomModal
    hotel={hotel}
    isOpen={openModal}
     onClose={() => setOpenModal(false)}/>
    </>
  );
};

export default HotelCard;







