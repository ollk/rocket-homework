import React from 'react';
import HotelCard from './HotelCard';

const List = (props) => {

  //comparison function for low-to-high sort
  function lowHigh(a,b) {
    if (a.lowestAveragePrice.amount < b.lowestAveragePrice.amount){
      return -1;
    }
    if (a.lowestAveragePrice.amount > b.lowestAveragePrice.amount){
      return 0;
    }
  }

  //comparison function for high-to-low sort
  function highLow(a,b) {
    if (a.lowestAveragePrice.amount > b.lowestAveragePrice.amount){
      return -1;
    }
    if (a.lowestAveragePrice.amount < b.lowestAveragePrice.amount){
      return 0;
    }
  }

  //decides which comparison to use based on value of sort prop
  function sortHotels(hotels) {
    if (props.sort === 'low-high') {
      return hotels.sort((lowHigh))
    } else {
      return hotels.sort((highLow))
    }
  }

  //if sort prop truthy, sort, else use the default list
  //slicing hotels array to aviod mutation when sorting
  const hotels = props.sort ? sortHotels(props.hotels.slice(0)) : props.hotels;
  
  //if hotelName prop truthy and name does not match, render nothing, otherwise render hotel card component
  return (
    <div className="hotel-list">
        {hotels.map(hotel => (
          props.hotelName && !hotel.hotelStaticContent.name.toLowerCase().includes(props.hotelName.toLowerCase()) ? '' :
          <HotelCard hotel={hotel} key={hotel.id}/>
        ))}
    </div>
  )
}

export default List; 