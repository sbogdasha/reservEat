import './App.scss';
import './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Restaurants from './components/Restaurants/Restaurants';
import Map from './components/Map/Map';
import Details from './components/Details/Details';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/reservation" element={<Reservation />} />
       </Routes>
    </>
  );
}

export default App;