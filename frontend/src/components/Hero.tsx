import { useEffect, useState } from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


const images = [
  "/images/chren-hotel-1191718.jpg",
  "/images/lannahealthcare-hotel-768387.jpg",
  "/images/lequangutc89-bedroom-6577523.jpg",
  "/images/peterweideman-bedroom-5664221.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % images.length);
    console.log(direction);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

const goToSlide = (index: number) => {
  setCurrent(index);
};

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-200 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {images.map((img, index) => {
          const isActive = index === current;

          return (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${img})`,
                transform: isActive
                  ? "translateX(0%)"
                  : index < current
                  ? "translateX(-100%)"
                  : "translateX(100%)",
              }}/>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-luxury text-white text-4xl md:text-6xl font-bold leading-tight"
       style ={{ fontFamily: "Times New Roman, serif" }}
        >
          Welcome To <br/>
          <span className="text-yellow-400 font-snake">
            Sarova Hotels
          </span>
        </h1>
<p className="mt-6 text-gray-200 md:text-sm leading-relaxed">
  Luxury stays across Kenya designed to give you the perfect balance of comfort, elegance, and world-class hospitality. 
  From breathtaking coastal resorts in Mombasa to serene safari lodges in Maasai Mara and premium city hotels in Nairobi, 
  every stay is crafted to deliver unforgettable experiences. Enjoy exceptional service, modern facilities, fine dining, 
  and peaceful environments that make every moment special whether you are traveling for business, leisure, or adventure.
</p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition">
            Book Now
          </a>

          <a
            href="#hotels"
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Explore Hotels
          </a>
        </div>

<div className="mt-6 flex justify-center gap-3">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`h-3 w-3 rounded-full transition-all duration-300 ${
        current === index
          ? "bg-yellow-400 scale-125"
          : "bg-white/50 hover:bg-white"
      }`}/>
  ))}
</div>

      </div>
<button
  onClick={prevSlide}
  className="absolute left-5 top-1/2 -translate-y-1/2
  bg-black/30 hover:bg-black/50
  text-white p-3 rounded-full
  backdrop-blur-md transition duration-300">
  <FaCircleChevronLeft className="text-3xl" />
</button>

<button
  onClick={nextSlide}
  className="absolute right-5 top-1/2 -translate-y-1/2
  bg-black/30 hover:bg-black/50
  text-white p-3 rounded-full
  backdrop-blur-md transition duration-300">
  <FaCircleChevronRight className="text-3xl" />
</button>

    </section>
  );
};

export default Hero;



