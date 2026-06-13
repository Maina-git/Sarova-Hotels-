import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/articles/Navbar';
import Hero from './components/Hero';
import Hotels from './components/Hotels';
import Room from './components/Rooms';
import BookingSection from './components/BookingSection';
import Contact from './components/Contact';
import Footer from './components/articles/Footer';
import SignIn from './pages/SignIn';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Hotels />
            <Room />
            <BookingSection />
            <About />
            <Contact />
            <Footer />
            </>
        } />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
