import React from 'react'
import StoreItem from './StoreItem';

const StoreList = ({ stores, isLoading }) => {
  
  return isLoading ? (<h1>Loading...</h1>) : (  
  <section >
        {stores.map((store) => (
        <StoreItem key={store.store_id} store={store}></StoreItem>
      ))}
  </section>
  )  
}

export default StoreList
