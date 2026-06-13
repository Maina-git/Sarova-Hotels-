import HotelCard from "./cards/HotelCard";
import { HotelsData } from "../data/HotelsData"

const Hotels = () => {
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
            
          {HotelsData.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hotels;