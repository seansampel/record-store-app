import React from 'react'

const StoreList = ({ stores, isLoading }) => {
  
  return isLoading ? (<h1>Loading...</h1>) : (
  
  <section >

      {stores.map((store) => (
        <h1>{store.Name}</h1>
      ))}
  </section>
  )  
}

export default StoreList
