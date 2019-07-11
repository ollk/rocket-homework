import React from 'react';
import { shallow } from 'enzyme';
import HotelCard from './HotelCard';

describe('HotelCard', () => {
    const cardProps = {
      hotel: {
        id: '907',
        rewards: {
          miles: 10000
        },
        lowestAveragePrice: { 
          amount: 579.0 
        }, 
        hotelStaticContent: {
          mainImage: {
            url: "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
          },
          name: "Omni Chicago Hotel & Suites Magnificent Mile", 
          neighborhoodName: "Magnificent Mile",
        } 
      },
      key: '907'
    }
    const wrapper = shallow(<HotelCard {...cardProps}/>);

    it('renders the component', () => {
        expect(wrapper.find('.hotel-card').exists()).toBe(true);
    });
});