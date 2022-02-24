/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { allHotels } from '../Redux/Actions/hotelActions';
import Hotel from '../components/Hotel';
import '../styles/Hotel.css';

const HotelList = () => {
  const hotels = useSelector((state) => state.hotel.hotels);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'http://localhost:3000/api/v1/hotels';
  const myFetch = async () => {
    const response = await axios.get(url, { mode: 'cors' });
    dispatch(allHotels(response.data.data.hotels));
    setLoading(false);
  };

  useEffect(() => {
    myFetch();
  }, []);

  if (loading) {
    return (
      <main data-testid="loading">
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="container">
        <div className="hotelList">
          {hotels.map((hotel) => {
            const { _id, name, address, description, price, image, slug } =
              hotel;
            return (
              <Hotel
                key={_id}
                id={_id}
                name={name}
                address={address}
                description={description}
                price={price}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HotelList;
