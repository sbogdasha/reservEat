import './App.scss';
import './components/Home/Home';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Restaurants from './components/Restaurants/Restaurants';
import Map from './components/Map/Map';
import Details from './components/Details/Details';
import Reservation from './components/Reservation/Reservation';

function App() {
  return (
    <div className="App">
      <Reservation></Reservation>
    </div>
  );
}

export default App;