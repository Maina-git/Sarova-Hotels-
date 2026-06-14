import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/articles/Navbar";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import Room from "./components/Rooms";
import BookingSection from "./components/BookingSection";
import Contact from "./components/Contact";
import Footer from "./components/articles/Footer";
import About from "./components/About";

import AuthModal from "./components/modals/AuthModal";

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Router>
      <Navbar openAuthModal={() => setShowAuthModal(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Hotels />
              <Room />
              <BookingSection />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </Router>
  );
};

export default App;












