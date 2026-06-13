import { FaUsers } from "react-icons/fa";

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
  onBook: () => void;
}

const RoomCard = ({ room, onBook }: Props) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

      <div className="h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {room.name}
        </h2>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {room.description}
        </p>

        <div className="flex items-center gap-2 mt-4 text-yellow-600">
          <FaUsers />
          <span>{room.guests} Guests</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold text-yellow-600">
          KES {room.price.toLocaleString()}
        </h3>

        <p className="text-gray-500 text-sm">
          per night
        </p>

        <button
          onClick={onBook}
          className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl transition">
          Book Room
        </button>

      </div>
    </div>
  );
};

export default RoomCard;
























