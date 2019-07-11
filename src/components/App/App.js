import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import List from  './List';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);

    const [sort, setSort] = useState('');

    const [hotelName, setHotelName] = useState('');

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
        })
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <Filters setSort={setSort} setHotelName={setHotelName}/>
                <List hotels={hotels} sort={sort} hotelName={hotelName}/>
            </div>
        </div>
    )
}

export default App;
