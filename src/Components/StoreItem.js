import React from 'react'
import './styles.css';

const StoreItem = ({ store }) => {
  
  return <div className="Store-details">
            <div>{store.Name}</div>  
          <ul>
            <h6>{store.Address}</h6>
            <h6>{store.Postcode}</h6>
            <h6>{store.Contact_number}</h6>
          </ul>
          </div>  
  }

export default StoreItem
