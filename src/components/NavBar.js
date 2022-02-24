import { Link } from 'react-router-dom';
import HotelList from '../containers/HotelList';
import '../styles/NavBar.css';
// import '../styles/HotelList.css';

const NavBar = () => (
  <>
    <nav data-testid="nav" className="nav">
      <div>
        <Link className="heading" to="/" onClick={() => HotelList()}>
          <h1>Home</h1>
        </Link>
      </div>
      <header>
        <Link className="heading" to="/" onClick={() => HotelList()}>
          <h1>Hotel Booking</h1>
        </Link>
      </header>
      <div>
        <Link className="heading" to="/About">
          <h3>About</h3>
        </Link>
      </div>
    </nav>
  </>
);

export default NavBar;
