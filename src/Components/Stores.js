import { useState, useEffect } from 'react';

const Stores = () => {
  const [store, setStore] = useState('');

  useEffect(() => {
    getStore()
  }, []);

const getStore = () => {
  let url = `https://gist.githubusercontent.com/seansampel/6c70584d266c5305783e8b35ce3b1a00/raw/d7627f7270ba366a693332218b28538a7b75f7e3/store-locator`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    // let store = data.store;
    console.log(data);
    setStore(store);
  })
}

const handleClick = () => {
  getStore();
}

return (

  <div>
  <p id="text" > </p>
  <button onClick={handleClick} id="search-store">Search</button>
  </div>
  )
};

export default Stores;