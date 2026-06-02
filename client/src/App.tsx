import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/articles/Navbar';
import Hero from './components/Hero';
import Hotels from './components/Hotels';
import Room from './components/Rooms';

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
          </>
        } />
      </Routes>
    </Router>
   
  );
}

export default App;
