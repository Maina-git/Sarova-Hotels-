import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const endpoint = isLogin
        ? "http://localhost:3000/api/auth/login"
        : "http://localhost:3000/api/auth/register";

      const payload = isLogin
        ? {
            email: formData.email,
            password: formData.password,
          }
        : formData;

      const { data } = await axios.post(endpoint, payload);

      localStorage.setItem("token", data.token);

      onClose();

      window.location.reload();
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
  <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">

    <div className="bg-linear-to-r from-yellow-500 via-amber-500 to-orange-500 p-6 text-center">
      <img
        src="/11952675.54821da71073f.jpg"
        alt="Sarova Hotels"
        className="w-16 h-16 mx-auto rounded-full border-4 border-white shadow-md"/>

      <h2 className="mt-4 text-3xl font-bold text-white">
        {isLogin ? "Welcome Back" : "Join Sarova"}
      </h2>

      <p className="text-white/90 text-sm mt-2">
        Luxury stays. Exceptional experiences.
      </p>
    </div>

    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-white hover:scale-110 transition">
      <X size={22}/>
    </button>

    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              p-3
              outline-none
              focus:border-yellow-500"
            required/>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            p-3
            outline-none
            focus:border-yellow-500
          "
          required/>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            p-3
            outline-none
            focus:border-yellow-500
          "
          required/>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-linear-to-r
            from-yellow-500
            via-amber-500
            to-orange-500
            py-3
            font-semibold
            text-white
            transition
            hover:scale-[1.02]
          ">
          {loading
            ? "Please wait..."
            : isLogin
            ? "Sign In"
            : "Create Account"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="font-medium text-amber-600 hover:text-orange-600">
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Sign In"}
        </button>
      </div>
    </div>                                                                          
  </div>
</div>
  );
};

export default AuthModal;




