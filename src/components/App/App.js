import React, { useState, useEffect } from 'react';
import Filters from '../Filters/Filters';
import List from  '../List/List';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);

    //sort is set in Filter component and passed to List to determine sorting, if any
    const [sort, setSort] = useState('');

    //hotelName is set in Filter, passed to List, used to filter by name
    const [hotelName, setHotelName] = useState('');

    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
        })
        .catch(res => {
            setHasError(true);
        });
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <Filters setSort={setSort} setHotelName={setHotelName}/>
                {hasError ? <p>Something went wrong :( Please try again</p>
                : <List hotels={hotels} sort={sort} hotelName={hotelName}/>}
            </div>
        </div>
    )
}

export default App;
