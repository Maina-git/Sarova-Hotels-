import { FaTimes } from "react-icons/fa";

interface Props {
  onClose: () => void;
}

const bookings = [
  {
    id: 1,
    hotel: "Sarova Stanley",
    room: "Executive Room",
    checkIn: "12 Jun 2026",
    checkOut: "15 Jun 2026",
    guests: 2,
    amount: "KES 54,000",
    status: "Upcoming",
  },
  {
    id: 2,
    hotel: "Sarova Whitesands",
    room: "Deluxe Room",
    checkIn: "20 Jul 2026",
    checkOut: "25 Jul 2026",
    guests: 3,
    amount: "KES 75,000",
    status: "Upcoming",
  },
  {
    id: 3,
    hotel: "Sarova Mara",
    room: "Luxury Tent",
    checkIn: "10 Jan 2026",
    checkOut: "15 Jan 2026",
    guests: 2,
    amount: "KES 95,000",
    status: "Completed",
  },
];

const BookingsPopup = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-[9999] flex justify-center items-center p-4">

      <div className="bg-white w-full max-w-5xl rounded-3xl p-8 max-h-[90vh] overflow-y-auto relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-600"
        >
          <FaTimes />
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          My Bookings
        </h1>

        <div className="space-y-6">

          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold">
                {booking.hotel}
              </h2>

              <div className="mt-4 grid md:grid-cols-2 gap-4">

                <p>
                  <strong>Room:</strong>{" "}
                  {booking.room}
                </p>

                <p>
                  <strong>Guests:</strong>{" "}
                  {booking.guests}
                </p>

                <p>
                  <strong>Check In:</strong>{" "}
                  {booking.checkIn}
                </p>

                <p>
                  <strong>Check Out:</strong>{" "}
                  {booking.checkOut}
                </p>

                <p>
                  <strong>Amount:</strong>{" "}
                  {booking.amount}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      booking.status === "Upcoming"
                        ? "text-green-600"
                        : "text-blue-600"
                    }
                  >
                    {booking.status}
                  </span>
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default BookingsPopup;