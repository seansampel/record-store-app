import { useState, useEffect } from 'react';
import './styles.css'

const Stores = () => {
  const [store, setStore] = useState('');

  useEffect(() => {
    getStore([])
  }, []);

const getStore = (store) => {
  let url = `https://gist.githubusercontent.com/seansampel/6c70584d266c5305783e8b35ce3b1a00/raw/244308008e02fc6152e18c29a8c1d915738f125e/stores.json`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    getStore(data.results)
    
    setStore(store);
  })
}

const handleClick = () => {
  getStore();
}

return (

  <div>
  <div><p id="text" >{store}</p></div>
  <input alt="search"
  className="searchCity"
  placeholder="Search City..."></input>
  <button onClick={handleClick} id="search-store">Search</button>
  </div>
  )
};

export default Stores;