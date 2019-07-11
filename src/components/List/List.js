import React from 'react';
import HotelCard from '../HotelCard/HotelCard';

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
  

  //if hotelName prop is truthy, filter hotels for name
  //otherwise all hotels are passed to card component
  //if no hotels match, render message
  function generateList(hotels) {
    const filteredHotels = props.hotelName ? 
      hotels.filter(hotel => hotel.hotelStaticContent.name.toLowerCase().includes(props.hotelName.toLowerCase())) :
      hotels

    const hotelList = filteredHotels.map(hotel => (
      <HotelCard hotel={hotel} key={hotel.id}/>
    ))

    return hotelList.length ? hotelList : <p>No matches found</p>
  }


  return (
    <div className="hotel-list">
        {generateList(hotels)}
    </div>
  )
}

export default List; 