import React from 'react';

const Filters = (props) => {


  return (
    <div>
        <form className="filters">
            Hotel name
            <input type="text" className="input" onChange={(event) => props.setHotelName(event.target.value)}/>
            Price
            <select name="" className="select" onChange={(event) => props.setSort(event.target.value)}>
                <option value=''>Recommended</option>
                <option value="low-high">Price low-to-high</option>
                <option value="high-low">Price high-to-low</option>
            </select>
            <button className="button" onClick={() => document.getElementById('filters').reset()}>Reset</button>
        </form>
    </div>
  )
}

export default Filters;