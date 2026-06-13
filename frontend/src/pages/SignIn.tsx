import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMP TOKEN (replace with backend later)
    localStorage.setItem("token", "demo-token");

    navigate("/");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/mosiunterwegs-window-3178666.jpg')",
        }}/>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 mt-20 flex items-center justify-center min-h-screen px-4">

        <div className="w-full max-w-6xl flex bg-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">

       
          <div className="hidden md:flex w-1/2 relative">

            <img
              src="/images/walsarabi-architecture-3268488.jpg"
              alt="Sarova Hotels"
              className="w-full h-full object-cover"/>

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-10">
              <h1 className="text-4xl font-bold">
                Sarova Hotels
              </h1>

              <p className="mt-4 text-gray-200">
                Luxury stays across Kenya. Experience comfort,
                elegance, and unforgettable hospitality in world-class destinations.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-10 text-white">

            <h2 className="text-3xl font-bold text-center mb-6">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none"/>
              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none"/>

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none"/>

              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none"/>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-xl transition">
                {isLogin ? "Login" : "Sign Up"}
              </button>

            </form>

            <p className="text-center mt-6 text-gray-300">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                onClick={toggleMode}
                className="ml-2 text-yellow-400 hover:underline">
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>

            <div className="text-center mt-6">
              <Link to="/" className="text-yellow-400 hover:text-white">
               <button className="flex items-center gap-2 text-sm px-5 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white transition">
                <TfiControlBackward /> Back to Home
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>


      <section className="relative z-10 bg-black/80 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Why Choose Sarova Hotels?
            </h2>

            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Experience unmatched luxury, world-class hospitality,
              and unforgettable stays across Kenya’s top destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Luxury Rooms
              </h3>

              <p className="mt-4 text-gray-300">
                Elegant suites with modern interiors, premium bedding,
                and breathtaking views designed for ultimate comfort.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Fine Dining
              </h3>

              <p className="mt-4 text-gray-300">
                Enjoy world-class cuisine prepared by expert chefs
                using fresh local and international ingredients.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Premium Service
              </h3>

              <p className="mt-4 text-gray-300">
                Personalized hospitality ensuring every guest
                enjoys a seamless and memorable experience.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mt-20">

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                20+
              </h3>
              <p className="mt-2 text-gray-300">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                50K+
              </h3>
              <p className="mt-2 text-gray-300">Happy Guests</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                10+
              </h3>
              <p className="mt-2 text-gray-300">Luxury Hotels</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                4.9★
              </h3>
              <p className="mt-2 text-gray-300">Guest Rating</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SignIn;



