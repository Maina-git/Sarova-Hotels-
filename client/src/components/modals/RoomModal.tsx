import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";
import { RoomsData } from "../../data/RoomsData";

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
  hotelLocation: string;
}

const RoomModal = ({ isOpen, onClose, hotelName, hotelLocation }: RoomModalProps) => {
  const [liked, setLiked] = useState<number[]>([]);

  const hotel = RoomsData[0];

  if (!isOpen) return null;

  const toggleLike = (index: number) => {
    if (liked.includes(index)) {
      setLiked(liked.filter((item) => item !== index));
    } else {
      setLiked([...liked, index]);
    }
  };

  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3">

      <button
        onClick={scrollToBooking}
        className="
          fixed right-6 top-1/2 -translate-y-1/2
          bg-yellow-600 text-white px-4 py-3
          rounded-full shadow-lg hover:bg-yellow-700
          transition z-50 font-semibold">
        Book ↓
      </button>

      <div
        className="
          bg-white w-full max-w-4xl
          rounded-2xl relative
          max-h-[90vh] overflow-y-auto hide-scrollbar
          shadow-2xl"
          style={{
            overflowY:"scroll",
            scrollbarWidth:"none"
          }}
          >

    
        <div className="sticky top-0 bg-white border-b p-5 flex justify-between items-center overflow-y-auto z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {hotelName}
            </h2>
            <p className="text-sm text-gray-500">{hotelLocation}</p>
          </div>

          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full">
            <FaTimes />
          </button>
        </div>


        <div className="p-5">
          <h3 className="text-lg font-semibold mb-4">
            Available Rooms
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {hotel.rooms.map((room, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group">
                <img
                  src={room.image.trim()}
                  alt={`Room ${index + 1}`}
                  className="w-full h-44 object-cover group-hover:scale-105 transition"/>

                <button
                  onClick={() => toggleLike(index)}
                  className="absolute bottom-2 left-2 bg-white p-2 rounded-full shadow">
                  {liked.includes(index) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>

                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow">
                  <FaShareAlt />
                </button>
              </div>
            ))}
          </div>

          <div
            id="booking-section"
            className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-4">
              Book Your Stay
            </h3>

            <form className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-100 rounded-lg p-3"/>

              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-100 rounded-lg p-3"/>

              <input
                type="date"
                className="bg-gray-100 rounded-lg p-3"/>

              <input
                type="date"
                className="bg-gray-100 rounded-lg p-3"/>

              <input
                type="number"
                placeholder="Guests"
                className="md:col-span-2 bg-gray-100 rounded-lg p-3"/>

              <textarea
                rows={3}
                placeholder="Special Requests"
                className="md:col-span-2 bg-gray-100 rounded-lg p-3"/>

              <button
                type="submit"
                className="md:col-span-2 cursor-pointer bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700">
                Book Now
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;






