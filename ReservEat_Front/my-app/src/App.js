import './App.scss';
import './components/Home/Home';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Restaurants from './components/Restaurants/Restaurants';
import Map from './components/Map/Map';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Details></Details>
    </div>
  );
}

export default App;