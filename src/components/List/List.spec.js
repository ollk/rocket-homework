import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
    const listProps = {
      hotels: [
        {
          id: '907',
          lowestAveragePrice: { 
            amount: 579.0 
          }, 
          hotelStaticContent: {
            mainImage: {
              url: "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
            },
            name: "Hotel One", 
            neighborhoodName: "Magnificent Mile",
          } 
        },
        {
          id: '908',
          lowestAveragePrice: { 
            amount: 679.0 
          }, 
          hotelStaticContent: {
            mainImage: {
              url: "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
            },
            name: "Hotel Two", 
            neighborhoodName: "Magnificent Mile",
          } 
        }
      ],
      sort: '',
      hotelName: ''
    }

    const wrapper = shallow(<List {...listProps}/>);

    it('renders the component', () => {
        expect(wrapper.find('.hotel-list').exists()).toBe(true);
    });
});