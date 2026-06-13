
import { FaTimes } from "react-icons/fa";

interface Room {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  guests: number;
}

interface Props {
  room: Room;
  onClose: () => void;
}

const RoomPopup = ({ room, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-4">

      <div className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_.3s_ease] relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl">
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2">

          <div className="h-full">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"/>
          </div>

          <div className="p-8">

            <h1 className="text-4xl font-bold text-gray-800">
              {room.name}
            </h1>

            <p className="mt-4 text-gray-600">
              {room.description}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Room Features
              </h3>

              <ul className="mt-3 space-y-2 text-gray-600">
                <li>✓ Free WiFi</li>
                <li>✓ Air Conditioning</li>
                <li>✓ Smart TV</li>
                <li>✓ Room Service</li>
                <li>✓ Breakfast Included</li>
              </ul>
            </div>

            <p className="mt-6 text-yellow-600 font-medium">
              {room.guests} Guests
            </p>

            <div className="mt-6">
              <h2 className="text-4xl font-bold text-yellow-600">
                KES {room.price.toLocaleString()}
              </h2>
              <p className="text-gray-500">Per Night</p>
            </div>

            <div className="flex gap-4 mt-8">

              <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl transition">
                Book Now
              </button>

              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl transition">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPopup;





















