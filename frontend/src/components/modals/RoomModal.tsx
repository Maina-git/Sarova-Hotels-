import { useState } from "react";
import axios from "axios";
import {
  FaHeart,
  FaRegHeart,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotel: any;
}



const RoomModal = ({
  isOpen,
  onClose,
  hotel,
}: RoomModalProps) => {
  const [liked, setLiked] = useState<number[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const toggleLike = (index: number) => {
    if (liked.includes(index)) {
      setLiked(liked.filter((item) => item !== index));
    } else {
      setLiked([...liked, index]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleBooking = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      if (!selectedRoom) {
        alert("Please select a room");
        return;
      }

      setLoading(true);

      await axios.post(
        "http://localhost:3000/api/bookings",
        {
          roomId: selectedRoom.id,
          checkIn: bookingData.checkIn,
          checkOut: bookingData.checkOut,
          guests: Number(bookingData.guests),
          specialRequests: bookingData.specialRequests,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Booking successful!");

      onClose();
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Booking failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3">

      <button
        onClick={scrollToBooking}
        className="fixed right-6 top-1/2 -translate-y-1/2 bg-yellow-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-yellow-700"
      >
        Book ↓
      </button>

      <div
        className="bg-white w-full max-w-4xl rounded-2xl relative max-h-[90vh] overflow-y-scroll shadow-2xl"
        style={{
          scrollbarWidth: "none",
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white p-5 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold">
              {hotel.name}
            </h2>

            <p className="text-gray-500">
              {hotel.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="bg-gray-100 p-3 rounded-full"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-5">

          <h3 className="text-xl font-bold mb-4">
            Available Rooms
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {hotel.rooms.map((room: any, index: number) => (
              <div
                key={room.id}
                className={`relative rounded-xl overflow-hidden border-4 cursor-pointer transition
                ${
                  selectedRoom?.id === room.id
                    ? "border-yellow-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedRoom(room)}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-44 object-cover"
                />

                <div className="p-3 bg-white">

                  <h4 className="font-bold">
                    {room.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    KES {room.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => toggleLike(index)}
                  className="absolute bottom-2 left-2 bg-white p-2 rounded-full"
                >
                  {liked.includes(index) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>

                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full">
                  <FaShareAlt />
                </button>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div
            id="booking-section"
            className="mt-8 border-t pt-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Book Your Stay
            </h3>

            <form
              onSubmit={handleBooking}
              className="grid md:grid-cols-2 gap-4"
            >

              <input
                type="date"
                name="checkIn"
                value={bookingData.checkIn}
                onChange={handleChange}
                className="bg-gray-100 rounded-lg p-3"
              />

              <input
                type="date"
                name="checkOut"
                value={bookingData.checkOut}
                onChange={handleChange}
                className="bg-gray-100 rounded-lg p-3"
              />

              <input
                type="number"
                name="guests"
                value={bookingData.guests}
                onChange={handleChange}
                placeholder="Guests"
                className="md:col-span-2 bg-gray-100 rounded-lg p-3"
              />

              <textarea
                rows={3}
                name="specialRequests"
                value={bookingData.specialRequests}
                onChange={handleChange}
                placeholder="Special Requests"
                className="md:col-span-2 bg-gray-100 rounded-lg p-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomModal;








