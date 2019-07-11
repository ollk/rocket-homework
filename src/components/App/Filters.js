import React from 'react';

const Filters = (props) => {

  return (
    <div>
        <div className="filters">
            Hotel name
            <input type="text" className="input" maxLength={1}/>
            Price
            <select name="" className="select" onChange={(event) => props.setSort(event.target.value)}>
                <option value="">Recommended</option>
                <option value="low-high">Price low-to-high</option>
                <option value="high-low">Price high-to-low</option>
            </select>
            <button className="button">Reset</button>
        </div>
    </div>
  )
}

export default Filters;