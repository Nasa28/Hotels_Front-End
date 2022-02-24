import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Hotel.css';

const Hotel = ({ id, name, image, price }) => (
  <div className="meal-card " data-testid="meal-card" key={id}>
    <Link className="cards " to={`/Hotel/${id}`}>
      <div>
        <img className="image" src={image} alt={name} />
      </div>
      <div>
        <h3 className="title">{name}</h3>
        <h3 className="title">{price}</h3>
      </div>
    </Link>

    <div>
      <Link to={`/Hotel/${id}`}>
        <button type="button" className="btn btn-primary">
          Book Hotel
        </button>
      </Link>
    </div>
  </div>
);

Hotel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Hotel;
