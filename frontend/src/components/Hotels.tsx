import { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "./cards/HotelCard";

const Hotels = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const { data } = await axios.get(
      "http://localhost:3000/api/hotels"
      );
    setHotels(data.hotels);
  } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return (
      <section
        id="hotels"
        className="py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">
            Loading Hotels...
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section id="hotels" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Hotels
          </h1>

          <p className="text-gray-600 mt-3">
            Discover luxury stays across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hotels;


