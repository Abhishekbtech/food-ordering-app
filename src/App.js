import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import OrderSummary from './pages/OrderSummary';
import TrackOrder from './pages/TrackOrder';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/restaurant/:id" element={<RestaurantDetails/>} />
        <Route path="/order-summary" element={<OrderSummary/>} />
        <Route path="/track-order" element={<TrackOrder/>} />
      </Routes>
    </Router>
  );
}

export default App;
